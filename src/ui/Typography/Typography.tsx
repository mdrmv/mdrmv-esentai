'use client';

import { PropsWithChildren } from 'react';

import { Typography as TypographyMui } from '@mui/material';

import { TypographyProps } from './types';

/**
 * Typography component.
 */

export const Typography = ({
  children,
  variant = 'body1',
  className,
  title,
  align,
  whiteSpace,
  component = 'p',
  onClick,
}: TypographyProps & PropsWithChildren) => {
  return (
    <TypographyMui
      align={align}
      className={className}
      component={component}
      title={title}
      variant={variant}
      whiteSpace={whiteSpace}
      onClick={onClick}
    >
      {children}
    </TypographyMui>
  );
};
