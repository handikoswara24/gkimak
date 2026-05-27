# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server on http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

This is a **Next.js 14 (App Router)** full-stack application for **GKIMAK** (a church management system) using TypeScript, MongoDB/Mongoose, Tailwind CSS, and PrimeReact.

### Layer Structure

The codebase follows a layered pattern for API routes:

```
app/api/<resource>/route.ts   →  controllers/<resource>Controller.ts  →  models/<resource>Model.ts
```

- **`app/api/`** — Next.js Route Handlers. Each route uses `next-connect` to compose middleware + controller handlers.
- **`controllers/`** — Business logic functions. Wrapped with `catchAsyncErrors` middleware for error handling.
- **`models/`** — Mongoose schemas/models.
- **`middlewares/`** — `auth.ts` exports `protect`, `admin`, `user`, `wo`, `woOrAdmin`, `userOrAdmin` middleware for JWT-based role authorization. `catchAsyncErrors.ts` wraps async handlers. `errors.ts` is global error handler.
- **`utils/`** — `dbConnect.ts` (MongoDB singleton connection), `errorHandler.ts` (custom `ErrorHandler` class), `generateToken.ts`, `cloudinaryclass.ts` (image uploads), `slugify.ts`.

### Frontend

- **`app/`** — Next.js App Router pages. Three main sections:
  - `/` — Public-facing church website (home, about, renungan/devotions)
  - `/portal/login` — Auth entry point
  - `/admin/*` — Admin dashboard (jemaat, inventory, borrow items, users, settings, etc.)
- **`components/`** — Shared React components.
- **`service/`** — Axios-based API client functions (one file per resource, e.g. `jemaat-query.ts`). `base-query.ts` exports a configured axios instance.
- **`store/`** — Jotai atoms for global state (`loginAtom.ts`, `coverAtom.ts`).
- **`constants/`** — Per-resource constants (field names, labels, etc.).
- **`types/`** — TypeScript interfaces for all domain entities.

### Auth Flow

JWT tokens are stored client-side and passed as `Authorization: Bearer <token>` headers. The `protect` middleware validates the token and attaches the user to `req.user`. Roles: `admin`, `user`, `wo`.

### Key Domain Entities

- **Jemaat** — Church congregation members
- **Inventory / InventoryCategory** — Church asset tracking with QR code scanning (`html5-qrcode`, `react-qr-code`)
- **BorrowItem** — Item lending/return tracking
- **RenunganHarian** — Daily devotions (rich text via React Quill, slugified URLs)
- **Option** — Generic key-value settings
- **RSVP** — Event registration (writes to Google Sheets via `google-spreadsheet`)
- **Setting** — App-wide configuration

### Environment Variables

Required in `.env`:
- `MONGO_URI` — MongoDB connection string
- `JWT_SECRET` — JWT signing secret
- Cloudinary credentials for image uploads
- Google service account credentials for RSVP spreadsheet integration
