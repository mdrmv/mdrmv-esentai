import { PropsWithChildren } from 'react';

import { Typography } from '@/ui';

import styles from './Title.module.css';

export const Title = ({ children }: PropsWithChildren) => {
  return (
    <Typography className={styles.title} component="h3" variant="h3">
      {children}
    </Typography>
  );
};
