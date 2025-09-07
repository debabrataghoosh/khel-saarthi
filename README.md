# KHEL SAARTHI (Frontend)

A mobile-first Next.js web application for the Sports Authority of India (SAI) initiative. This project scaffolds all main screens/pages for onboarding, authentication, dashboard, assessments, test flow, results, and utility sections, optimized for mobile devices.

## Tech Stack
- Next.js (App Router, TypeScript)
- Tailwind CSS (mobile-first responsive design)

## Folder Structure
- `src/app/(onboarding)`: Splash, Welcome/Login, Registration Steps
- `src/app/(core)`: Dashboard, Profile, Assessments
- `src/app/(test)`: Test Instructions, Live Test, Post-Test Analysis
- `src/app/(results)`: Progress, Merit List, Grievance
- `src/app/(utility)`: Settings, Help, About

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) on a mobile device or emulator for best experience.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Next Steps
- Implement navigation between screens
- Add mobile meta tags and PWA support
- Connect to backend APIs (future)
- Replace placeholder content with real UI and logic
