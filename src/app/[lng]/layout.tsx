import './globals.css';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as ThemeProviderMui } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { dir } from 'i18next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import { Layout } from '@/components';
import theme from '@/theme/theme';

import { I18nProvider } from '../i18n/I18nProvider';

import StyledJsxRegistry from './registry';

export { generateMetadata, generateStaticParams } from './helpers';

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

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
                <StyledJsxRegistry>
                  <Layout>{children}</Layout>
                </StyledJsxRegistry>
              </ThemeProviderMui>
            </AppRouterCacheProvider>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
