This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Railway

This application is configured for deployment on [Railway](https://railway.app/).

### Prerequisites

- Railway account
- PostgreSQL database
- Clerk account (for authentication)
- Stripe account (for payments)

### Deployment Steps

1. **Push your code to GitHub**

2. **Create a new Railway project**
   - Go to [railway.app](https://railway.app)
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Add PostgreSQL Database**
   - In your Railway project, click "+ New"
   - Select "Database" → "Add PostgreSQL"
   - Railway will automatically provide a `DATABASE_URL` environment variable

4. **Set Environment Variables**
   In your Railway service, go to the "Variables" tab and add:
   
   ```env
   DATABASE_URL=<automatically provided by Railway PostgreSQL service>
   NEXT_PUBLIC_APP_URL=<your-railway-app-url>
   ENCRYPTION_KEY=<generate with: openssl rand -hex 32>
   API_SECRET=<generate a secure random string>
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
   CLERK_SECRET_KEY=<your-clerk-secret-key>
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<your-stripe-publishable-key>
   STRIPE_SECRET_KEY=<your-stripe-secret-key>
   STRIPE_WEBHOOK_SECRET=<your-stripe-webhook-secret>
   NEXT_PUBLIC_DEV_MODE=false
   ```

5. **Run Database Migrations**
   After deployment, connect to your Railway PostgreSQL database and run the migration:
   ```bash
   npx prisma migrate deploy
   ```
   Or use Railway's CLI:
   ```bash
   railway run npx prisma migrate deploy
   ```

6. **Deploy**
   - Railway will automatically detect your Next.js app
   - It will build and deploy your application
   - Your app will be live at the provided Railway URL

### Important Notes

- Make sure `NEXT_PUBLIC_APP_URL` matches your Railway deployment URL
- Update your Clerk and Stripe webhook URLs to point to your Railway deployment
- The app uses PostgreSQL (configured in `prisma/schema.prisma`)
