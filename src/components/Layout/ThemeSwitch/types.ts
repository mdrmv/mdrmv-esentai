import { ReactElement } from 'react';

/**
 * Interface for Switch Props
 */
export interface SwitchProps {
  /**
   * Specifies whether the switch is checked (on) or not. This is an optional property.
   */
  checked?: boolean;

  /**
   * Specifies whether the switch is disabled or not. This is an optional property.
   */
  disabled?: boolean;

  /** Custom thumb */
  thumb?: ReactElement;

  /** Custom checked thumb */
  thumbChecked?: ReactElement;

  className?: string;

  /**
   * A callback function to be invoked when the switch state changes.
   * It receives the new state (true for checked, false for unchecked) as an argument.
   */
  onChange?: (value: boolean) => void;
}
