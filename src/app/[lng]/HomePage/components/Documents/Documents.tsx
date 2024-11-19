'use client';

import { useTranslation } from '@/app/i18n/client';
import { TranslationPath } from '@/app/i18n/types';
import { Icon, Stack } from '@/ui';

import { Title } from '../Title';

import styles from './Documents.module.css';

const documents: {
  name: TranslationPath<'home-page'>;
  href: string;
}[] = [
  {
    name: 'documents.docs.policy',
    href: '/docs/complaint-management-policy.pdf',
  },
  {
    name: 'documents.docs.certificate',
    href: '/docs/certificate-of-incorporation.pdf',
  },
  {
    name: 'documents.docs.personalData',
    href: '/docs/personal-data-collection-and-processing-policy.pdf',
  },
];

export const Documents = () => {
  const { t } = useTranslation('home-page');

  return (
    <Stack spacing={20} spacingMobile={16}>
      <Title>{t('documents.title')}</Title>

      <div className={styles.documents}>
        {documents.map(({ name, href }) => (
          <div key={name}>
            <div className={styles.documentIcon}>
              <Icon.Document />
            </div>
            <a className={styles.documentTitle} href={href} target="_blank">
              {t(name)}
            </a>
          </div>
        ))}
      </div>
    </Stack>
  );
};
