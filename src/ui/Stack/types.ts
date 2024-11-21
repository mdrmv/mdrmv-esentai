import { ElementType } from 'react';

type Spacing = 0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 48;

export interface StackProps {
  /** Spacing */
  spacing?: Spacing;
  spacingMobile?: Spacing;

  /**
   * row-desktop - row
   */
  direction?: 'row' | 'column';

  flexWrap?: 'nowrap' | 'wrap';

  alignItems?:
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'self-end'
    | 'self-start'
    | 'start'
    | 'normal';

  justifyContent?:
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | 'stretch'
    | 'center'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'start'
    | 'normal';

  className?: string;

  component?: ElementType;
}
