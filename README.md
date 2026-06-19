# Man Arise

Landing page for **Man Arise**, a men's ministry in Cuauhtémoc.

🔗 **Live:** https://man-arise.vercel.app

Built with [Next.js](https://nextjs.org) (App Router) + [Tailwind CSS](https://tailwindcss.com).

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Deploying

The site auto-deploys to Vercel on every push to `main`:

```bash
git add -A && git commit -m "your change" && git push
```

## Editing content

| What | Where |
|------|-------|
| Hero headline / tagline | `components/Hero.tsx` |
| The Four Pillars | `components/Pillars.tsx` |
| 5-month program | `components/Program.tsx` |
| Kickoff event ("Rise Up Kings Ignite") | `components/Kickoff.tsx` |
| Monthly activities | `components/Activities.tsx` |
| Book reading list (titles, authors, Amazon links) | `components/Resources.tsx` |
| Footer | `components/Footer.tsx` |

## Sign-up link & QR code

The sign-up URL lives in one place: `lib/site.ts` (`SIGNUP_URL`).
It powers both CTA buttons **and** the QR code shown on the page.

After changing `SIGNUP_URL`, regenerate the QR image:

```bash
npm run qr       # writes public/qr-signup.png
```
