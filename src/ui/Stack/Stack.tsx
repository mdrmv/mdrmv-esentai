import { PropsWithChildren } from 'react';

import { Stack as StackMui } from '@mui/material';

import { StackProps } from './types';

export const Stack = ({
  spacing = 0,
  spacingMobile,
  direction = 'column',
  alignItems = 'normal',
  justifyContent = 'normal',
  flexWrap = 'nowrap',
  className,
  children,
  component = 'div',
}: StackProps & PropsWithChildren) => {
  return (
    <StackMui
      alignItems={alignItems}
      className={className}
      component={component}
      direction={direction}
      flexWrap={flexWrap}
      gap={`${spacing}px`}
      justifyContent={justifyContent}
      sx={{
        '@media (max-width: 920px)': {
          '&': {
            gap: `${spacingMobile ?? spacing}px;`,
          },
        },
      }}
    >
      {children}
    </StackMui>
  );
};
