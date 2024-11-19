import { ElementType, MouseEventHandler } from 'react';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button'
  | 'overline';

/**
 * Props for the Typography component.
 */
export interface TypographyProps {
  /**
   * The variant of the typography element.
   * @default "body1"
   */
  variant?: TypographyVariant;

  className?: string;

  component?: ElementType;

  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';

  maxLine?: number;

  title?: string;

  whiteSpace?: 'pre' | 'pre-wrap' | 'nowrap' | 'normal' | 'pre-line';

  onClick?: MouseEventHandler<HTMLElement>;
}
