import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Simple in-memory rate limiting store
// In production, consider using Redis or a similar solution
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Rate limit configuration
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5; // 5 requests per minute for contact form

function getClientIP(request: NextRequest): string {
  // Try various headers for the real IP (works behind proxies/load balancers)
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIP = request.headers.get("x-real-ip");
  if (realIP) {
    return realIP;
  }

  // Fallback to a default if no IP found
  return "unknown";
}

function isRateLimited(clientIP: string): boolean {
  const now = Date.now();
  const clientData = rateLimitStore.get(clientIP);

  if (!clientData || now > clientData.resetTime) {
    // Reset or initialize the rate limit window
    rateLimitStore.set(clientIP, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return false;
  }

  if (clientData.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  // Increment the count
  clientData.count++;
  rateLimitStore.set(clientIP, clientData);
  return false;
}

// Cleanup old entries periodically (memory management)
function cleanupRateLimitStore(): void {
  const now = Date.now();
  for (const [key, value] of rateLimitStore.entries()) {
    if (now > value.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}

// Run cleanup every 5 minutes
if (typeof setInterval !== "undefined") {
  setInterval(cleanupRateLimitStore, 5 * 60 * 1000);
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Remove server information headers
  response.headers.delete("x-powered-by");
  response.headers.delete("server");

  // Add security headers that might not be set by next.config.ts
  response.headers.set("X-DNS-Prefetch-Control", "on");
  response.headers.set("X-Download-Options", "noopen");
  response.headers.set("X-Permitted-Cross-Domain-Policies", "none");

  // Rate limiting for contact form submissions
  if (request.nextUrl.pathname === "/contact" && request.method === "POST") {
    const clientIP = getClientIP(request);

    if (isRateLimited(clientIP)) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Trop de requêtes. Veuillez réessayer dans une minute.",
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": "60",
          },
        }
      );
    }
  }

  // Rate limiting for server actions (contact form)
  if (
    request.nextUrl.pathname.startsWith("/") &&
    request.method === "POST" &&
    request.headers.get("next-action")
  ) {
    const clientIP = getClientIP(request);

    if (isRateLimited(clientIP)) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          message: "Trop de requêtes. Veuillez réessayer dans une minute.",
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": "60",
          },
        }
      );
    }
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt
     * - sitemap.xml
     */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
