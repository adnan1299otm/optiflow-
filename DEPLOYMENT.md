# OptiFlow Deployment Guide

This guide outlines the complete process to deploy the OptiFlow portfolio website to production.

## 1. GitHub
The application is ready to be committed and pushed:
```bash
git init
git add .
git commit -m "feat: initial production build"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

## 2. Vercel Deployment
- Create an account or log in at [Vercel.com](https://vercel.com)
- Click **Add New Project** and import the GitHub repository.
- **Framework Preset**: Next.js (Vercel will auto-detect this).
- **Root Directory**: `./` (or select the appropriate directory if inside a monorepo).
- Before clicking Deploy, expand the **Environment Variables** section.

## 3. Environment Variables
Add all the variables from your `.env.example` file (Vercel Dashboard → Settings → Environment Variables):

```
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account-email@project.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEETS_SPREADSHEET_ID=your-google-sheets-id
NEXT_PUBLIC_SITE_URL=https://optiflow.io
CONTACT_EMAIL=optiflowofficialteam@gmail.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
RESEND_API_KEY=re_xxxxxxxxx
```
*(Note: If your private key throws formatting errors, ensure it is wrapped in double quotes and parses `\n` correctly).*

## 4. Custom Domain Setup
- Go to **Vercel → Project → Settings → Domains**.
- Enter `optiflow.io` and click Add.
- Vercel will provide the necessary `A` or `CNAME` records.
- Update your DNS settings at your domain registrar (e.g., Namecheap, Route53, GoDaddy) to point to Vercel's nameservers or IP addresses.
- Vercel will automatically provision SSL/HTTPS certificates.

## 5. Post-Deploy Checklist
Verify the live environment to guarantee the build matches localhost:
- [ ] Homepage loads and Framer Motion animations trigger.
- [ ] All 5 Service pages (`/services/...`) load their distinct 3D Splines.
- [ ] Portfolio gallery and Lightbox filters work cleanly without hydration warnings.
- [ ] Smart form (`/get-started`) submits successfully and a new row appears in Google Sheets.
- [ ] Contact form (`/contact`) submits successfully.
- [ ] All Spline scenes fallback correctly on mobile (`width < 768px`) using CSS gradients.
- [ ] Mobile responsive layout tested on a physical iOS/Android device.
- [ ] HTTPS (padlock icon) is securely active in the browser.
- [ ] Submit `sitemap.xml` directly to Google Search Console to index the 19+ newly generated routes.

Deployment is complete. 🚀
