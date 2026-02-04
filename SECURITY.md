# Security Policy

## Security Measures Implemented

This portfolio website implements comprehensive security measures following OWASP Top 10 guidelines.

### HTTP Security Headers

| Header | Value | Purpose |
|--------|-------|---------|
| Content-Security-Policy | Strict policy | Prevents XSS and injection attacks |
| X-Frame-Options | DENY | Prevents clickjacking |
| X-Content-Type-Options | nosniff | Prevents MIME-type sniffing |
| X-XSS-Protection | 1; mode=block | Legacy XSS filter |
| Strict-Transport-Security | max-age=31536000 | Enforces HTTPS |
| Referrer-Policy | strict-origin-when-cross-origin | Controls referrer information |
| Permissions-Policy | Restrictive | Disables unnecessary browser features |

### Form Security

- **Server-side validation**: All form inputs validated with Zod schemas
- **Input sanitization**: XSS prevention through HTML entity encoding
- **Honeypot field**: Bot detection without CAPTCHAs
- **Rate limiting**: 5 requests per minute per IP for contact form
- **Server Actions**: Form processing on server-side only

### Environment Variables

Sensitive data is stored in environment variables:
- `WEB3FORMS_ACCESS_KEY`: API key for contact form submission

**Never commit `.env.local` to version control.**

## Security Checklist

- [x] Content Security Policy (CSP) headers
- [x] X-Frame-Options: DENY
- [x] X-Content-Type-Options: nosniff
- [x] Strict-Transport-Security (HSTS)
- [x] Referrer-Policy
- [x] Input validation with Zod schemas
- [x] Input sanitization (XSS prevention)
- [x] Rate limiting on contact form
- [x] Honeypot field for bot detection
- [x] Environment variables for secrets
- [x] Server Actions for form processing
- [x] No exposed API keys in client code

## Reporting Security Issues

If you discover a security vulnerability, please report it responsibly:

1. **Do not** create a public GitHub issue
2. Contact the maintainer directly
3. Provide detailed information about the vulnerability
4. Allow reasonable time for a fix before public disclosure

## Verification

After deployment, verify security headers at:
- https://securityheaders.com
- https://observatory.mozilla.org

## Dependencies

Keep dependencies updated to patch security vulnerabilities:

```bash
npm audit
npm update
```

## Additional Recommendations

For production deployment:

1. Enable HTTPS only (redirect HTTP to HTTPS)
2. Use a Web Application Firewall (WAF)
3. Monitor server logs for suspicious activity
4. Implement backup and recovery procedures
5. Regular security audits
