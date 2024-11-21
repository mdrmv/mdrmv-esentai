import type { Metadata } from 'next';

import { getTranslation } from '../../i18n/server';
import { fallbackLng, languages } from '../../i18n/settings';

export async function generateMetadata({
  params,
}: {
  params: {
    lng: string;
  };
}): Promise<Metadata> {
  let { lng } = await params;
  if (languages.indexOf(lng) < 0) lng = fallbackLng;

  const { t } = await getTranslation(lng);

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
      apple: [
        {
          media: '(prefers-color-scheme: light)',
          sizes: '180x180',
          url: '/images/favicon-light/apple-touch-icon.png',
          href: '/images/favicon-light/apple-touch-icon.png',
        },
        {
          media: '(prefers-color-scheme: dark)',
          sizes: '180x180',
          url: '/images/favicon-dark/apple-touch-icon.png',
          href: '/images/favicon-dark/apple-touch-icon.png',
        },
      ],
      shortcut: [
        {
          media: '(prefers-color-scheme: light)',
          url: '/images/favicon-light/favicon.ico',
          href: '/images/favicon-light/favicon.ico',
        },
        {
          media: '(prefers-color-scheme: dark)',
          url: '/images/favicon-dark/favicon.ico',
          href: '/images/favicon-dark/favicon.ico',
        },
      ],
      icon: [
        {
          media: '(prefers-color-scheme: light)',
          rel: 'icon',
          sizes: '96x96',
          type: 'image/png',
          url: '/images/favicon-light/favicon-96x96.png',
          href: '/images/favicon-light/favicon-96x96.png',
        },
        {
          media: '(prefers-color-scheme: light)',
          rel: 'icon',
          type: 'image/svg+xml',
          url: '/images/favicon-light/favicon.svg',
          href: '/images/favicon-light/favicon.svg',
        },
        {
          media: '(prefers-color-scheme: dark)',
          rel: 'icon',
          sizes: '96x96',
          type: 'image/png',
          url: '/images/favicon-dark/favicon-96x96.png',
          href: '/images/favicon-dark/favicon-96x96.png',
        },
        {
          media: '(prefers-color-scheme: dark)',
          rel: 'icon',
          type: 'image/svg+xml',
          url: '/images/favicon-dark/favicon.svg',
          href: '/images/favicon-dark/favicon.svg',
        },
      ],
    },
  };
}
