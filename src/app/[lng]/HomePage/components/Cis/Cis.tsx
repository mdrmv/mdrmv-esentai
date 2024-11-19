'use client';

import { useTranslation } from '@/app/i18n/client';
import { Stack } from '@/ui';

import { Subtitle } from '../Subtitle';
import { Title } from '../Title';

export const Cis = () => {
  const { t } = useTranslation('home-page');
  return (
    <Stack spacing={16} spacingMobile={12}>
      <Title>{t('cis.title')}</Title>
      <Subtitle>{t('cis.subtitle')}</Subtitle>
    </Stack>
  );
};
