import { ElementType, PropsWithChildren } from 'react';

import { Box } from '@mui/material';
import cx from 'classnames';

import styles from './Body.module.css';

export interface BodyProps {
  className?: string;
  component?: ElementType;
}

export const Body = ({
  className,
  children,
  component = 'div',
}: BodyProps & PropsWithChildren) => {
  return (
    <Box className={cx(styles.body, className)} component={component}>
      {children}
    </Box>
  );
};
