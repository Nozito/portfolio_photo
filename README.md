# Noah Dekeyzer - Photography Portfolio

A modern photography portfolio built with Next.js 16, React 19, and Tailwind CSS v4.

## Features

- **Modern Design**: Black & white color scheme with glassmorphism effects
- **Bento Box Layouts**: Modern grid-based layouts
- **Massive Typography**: Fluid, responsive typography
- **Security Hardened**: OWASP Top 10 compliance
- **Performance Optimized**: Target 95+ Lighthouse scores
- **Accessible**: WCAG 2.1 AA compliant
- **Responsive**: Mobile-first design

## Tech Stack

- **Framework**: Next.js 16.1.6
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Validation**: Zod

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-photo.git
cd portfolio-photo
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your Web3Forms API key:
```
WEB3FORMS_ACCESS_KEY=your_access_key_here
```

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── actions/           # Server actions
│   └── contact.ts     # Contact form handler
├── components/
│   ├── animations/    # Animation components
│   ├── forms/         # Form components
│   ├── layout/        # Layout components
│   ├── media/         # Media components
│   └── ui/            # UI primitives
├── about/             # About page
├── contact/           # Contact page
├── portfolio/         # Portfolio page
├── concerts/          # Concert gallery
├── portraits/         # Portrait gallery
├── voitures/          # Automotive gallery
├── voyages/           # Travel gallery
└── ...
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Security

See [SECURITY.md](./SECURITY.md) for security measures implemented.

## Performance

Targets:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Self-hosted

```bash
npm run build
npm run start
```

## License

All rights reserved. Images and content are property of Noah Dekeyzer.

## Contact

- Website: [noahdekeyzer.com](https://noahdekeyzer.com)
- Instagram: [@noahdkr_](https://instagram.com/noahdkr_)
- LinkedIn: [Noah Dekeyzer](https://linkedin.com/in/noah-dekeyzer)
