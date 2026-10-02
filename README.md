# Retcon Consulting

Marketing site for [Retcon Consulting](https://www.retconconsulting.com). Built with Next.js (App Router), React, TypeScript, and SCSS modules.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build
```

## Environment variables

The contact form sends mail through Gmail via Nodemailer.

| Variable         | Purpose                                                 |
| ---------------- | ------------------------------------------------------- |
| `EMAIL_USER`     | Sending account (falls back to `NEXT_PUBLIC_EMAIL`)      |
| `EMAIL_PASSWORD` | App password for the sending account                    |
| `PERSONAL_EMAIL` | Where inquiries are delivered (defaults to `EMAIL_USER`) |

## Structure

- `src/app` – routes (`/`, `/development`, `/contact`, `/api/contact`)
- `src/components` – shared UI (Header, Footer, Section, Button, ContactForm, Cta)
- `src/lib/content` – page copy as typed data
- `src/lib/contact.ts` – Zod schema shared by the form and API
- `src/lib/mail.ts` – server-only email sending
- `src/app/globals.scss` – design tokens (light/dark via `prefers-color-scheme`)
