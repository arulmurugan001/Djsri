# DJ Sri Backend

Express + Prisma + PostgreSQL API for the DJ Sri booking form.

## Setup

1. Open this folder in a terminal.
2. Run `npm install`.
3. Copy `.env.example` to `.env`.
4. Replace `YOUR_POSTGRES_PASSWORD` and set a strong `ADMIN_API_KEY`.
5. Run `npx prisma migrate dev --name init`.
6. Run `npm run dev`.

The API runs at `http://localhost:5000` by default.

## API routes

| Method | Route | Access | Purpose |
| --- | --- | --- | --- |
| GET | `/api/health` | Public | Health check |
| POST | `/api/enquiries` | Public | Save a booking enquiry |
| GET | `/api/enquiries` | Admin | List enquiries |
| GET | `/api/enquiries/:id` | Admin | View one enquiry |
| PATCH | `/api/enquiries/:id` | Admin | Change enquiry status |
| DELETE | `/api/enquiries/:id` | Admin | Delete an enquiry |

For admin routes, send the environment value in the `x-admin-api-key` header.

Valid status values are `NEW`, `CONTACTED`, `CONFIRMED`, and `CLOSED`.
