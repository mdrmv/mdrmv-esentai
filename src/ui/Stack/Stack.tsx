import { PropsWithChildren } from 'react';

import { cx } from '@/theme';

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
}: StackProps & PropsWithChildren) => {
  return (
    <div className={cx('stack', className)}>
      <style jsx>{`
        .stack {
          display: flex;
          align-items: ${alignItems};
          justify-content: ${justifyContent};
          flex-wrap: ${flexWrap};
          flex-direction: ${direction};
          gap: ${spacing}px;
        }

        @media (max-width: 920px) {
          .stack {
            gap: ${spacingMobile ?? spacing}px;
          }
        }
      `}</style>
      {children}
    </div>
  );
};
