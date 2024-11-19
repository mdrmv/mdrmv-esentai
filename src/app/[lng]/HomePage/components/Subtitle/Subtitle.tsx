import { PropsWithChildren } from 'react';

import { Typography } from '@/ui';

import styles from './Subtitle.module.css';

export const Subtitle = ({ children }: PropsWithChildren) => {
  return (
    <Typography className={styles.subtitle} variant="body2">
      {children}
    </Typography>
  );
};
