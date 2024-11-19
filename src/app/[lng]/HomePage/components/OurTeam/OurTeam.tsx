'use client';

import { useTranslation } from 'react-i18next';

import { Stack, Typography } from '@/ui';

import { Title } from '../Title';

import styles from './OurTeam.module.css';

export const OurTeam = () => {
  const { t } = useTranslation('home-page');

  const teams = t('ourTeam.teams', { returnObjects: true });

  return (
    <Stack spacing={20} spacingMobile={16}>
      <Title>{t('ourTeam.title')}</Title>

      <div className={styles.teams}>
        {teams.map(({ name, position }) => (
          <Stack key={name} spacing={4}>
            <Typography className={styles.name}>{name}</Typography>
            <Typography className={styles.position}>{position}</Typography>
          </Stack>
        ))}
      </div>
    </Stack>
  );
};
