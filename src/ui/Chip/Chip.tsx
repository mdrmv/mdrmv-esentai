import { ReactNode } from 'react';

import { Chip as ChipBase } from '@mui/material';

import styles from './Chip.module.css';

export interface ChipProps {
  label: ReactNode;
}
export const Chip = ({ label }: ChipProps) => (
  <ChipBase className={styles.chip} label={label} />
);
