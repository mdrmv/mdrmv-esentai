import React from 'react';

import { useTranslation } from '@/app/i18n/client';
import { cx } from '@/theme';
import { Typography } from '@/ui';

import styles from './Footer.module.css';

interface Props {
  className?: string;
}

export const Footer = ({ className }: Props) => {
  const { t } = useTranslation('footer');

  return (
    <footer className={cx(styles.container)}>
      <div className={cx(styles.content, className)}>
        <div className={styles.footerLeft}>
          <Typography
            className={styles.address}
            component="address"
            variant="body2"
          >
            {t('address')}
            <br />
          </Typography>
        </div>
        <div className={styles.footerRight}>
          <a className={styles.mail} href="mailto:info@esentai.finance">
            info@esentai.finance
          </a>
          <Typography className={styles.copyright} variant="caption">
            {t('copyright')}
          </Typography>
        </div>
      </div>
    </footer>
  );
};
