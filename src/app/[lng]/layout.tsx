import './globals.css';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as ThemeProviderMui } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { dir } from 'i18next';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import theme from '@/theme/theme';

import { useServerTranslation } from '../i18n';
import { I18nProvider } from '../i18n/I18nProvider';
import { fallbackLng, languages } from '../i18n/settings';

import StyledJsxRegistry from './registry';

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export async function generateMetadata({
  params,
}: {
  params: {
    lng: string;
  };
}): Promise<Metadata> {
  let { lng } = await params;
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useServerTranslation(lng);

  return {
    openGraph: {
      type: 'website',
      title: t('title'),
      description: t('description'),
      images: '/images/logo-preview.jpg',
    },
    title: t('title'),
    description: t('description'),
    icons: {
      icon: [
        {
          media: '(prefers-color-scheme: light)',
          url: '/images/favicon-light.ico',
          href: '/images/favicon-light.ico',
        },
        {
          media: '(prefers-color-scheme: dark)',
          url: '/images/favicon-dark.ico',
          href: '/images/favicon-dark.ico',
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    lng: string;
  };
}>) {
  const { lng } = await params;
  return (
    <html suppressHydrationWarning dir={dir(lng)} lang={lng}>
      <head>
        <meta name="theme-color" />
      </head>
      <body className={`${inter.variable}`}>
        <I18nProvider lng={lng}>
          <ThemeProvider enableSystem>
            <AppRouterCacheProvider options={{ enableCssLayer: true }}>
              <ThemeProviderMui theme={theme}>
                <CssBaseline />
                <StyledJsxRegistry>{children}</StyledJsxRegistry>
              </ThemeProviderMui>
            </AppRouterCacheProvider>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
