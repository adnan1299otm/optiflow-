import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Space_Grotesk, Outfit, JetBrains_Mono } from 'next/font/google';
import { LazyMotion, domAnimation } from 'framer-motion';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
  preload: true,
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-body',
  display: 'swap',
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-code',
  display: 'swap',
  preload: true,
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://optiflow.io';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'OptiFlow | Automate. Optimize. Grow.',
    template: '%s | OptiFlow',
  },
  description: 'OptiFlow is a premium digital agency specializing in web development, AI automation, Meta Ads management, app development, and data scraping.',
  keywords: ['web development', 'AI automation', 'Meta Ads', 'n8n', 'app development', 'data scraping', 'digital agency'],
  authors: [{ name: 'OptiFlow', url: BASE_URL }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'OptiFlow',
    title: 'OptiFlow | Automate. Optimize. Grow.',
    description: 'Premium digital agency. Web dev, AI automation, Meta Ads & more.',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: 'OptiFlow' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OptiFlow | Automate. Optimize. Grow.',
    description: 'Premium digital agency. Web dev, AI automation, Meta Ads & more.',
    images: [`${BASE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${outfit.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://prod.spline.design" />
        <link rel="dns-prefetch" href="https://prod.spline.design" />
        <link rel="preconnect" href="https://openrouter.ai" />
      </head>
      <body className="bg-black text-white font-body antialiased min-h-screen flex flex-col">
        <LazyMotion features={domAnimation}>
          <Suspense fallback={null}>
            <GoogleAnalytics />
          </Suspense>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </LazyMotion>
      </body>
    </html>
  );
}
