'use client';

import { useTranslation } from '@/app/i18n/client';
import { Chip, Stack } from '@/ui';

import { Subtitle } from '../Subtitle';
import { Title } from '../Title';

export const License = () => {
  const { t } = useTranslation('home-page');

  const chips = t('license.chips', { returnObjects: true });

  return (
    <Stack spacing={32} spacingMobile={24}>
      <Stack component="header" spacing={16} spacingMobile={12}>
        <Title>
          {t('license.title')}:{' '}
          <a
            className="noWrapText"
            href="/docs/licence-esentai-asset-management-ltd-signed.pdf"
            target="_blank"
          >
            AFSA-A-LA-2024-0024
          </a>
        </Title>

        <Subtitle>
          {t('license.subtitle.text')}{' '}
          <a
            className="noWrapText"
            href="https://publicreg.myafsa.com/licence_details/AFSA-A-LA-2024-0024/"
            target="_blank"
          >
            {t('license.subtitle.link')}
          </a>
          .
        </Subtitle>
      </Stack>
      <Stack direction="row" flexWrap="wrap" spacing={8}>
        {chips.map((label) => (
          <Chip key={label} label={label} />
        ))}
      </Stack>
    </Stack>
  );
};
