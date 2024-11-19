'use client';

import { useEffect } from 'react';

import { Box } from '@mui/material';
import { useTheme } from 'next-themes';

import { cx } from '@/theme';
import { Icon } from '@/ui';

import styles from './ThemeSwitch.module.css';

/**
 * Switch Component
 */
export const ThemeSwitch = () => {
  const { setTheme, theme } = useTheme();

  const handlerChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    setTimeout(() => {
      const root = document.querySelector(':root');
      const rootStyle = getComputedStyle(root!);

      const metaColor = document.querySelector("meta[name='theme-color']");

      if (metaColor) {
        metaColor.setAttribute(
          'content',
          rootStyle.getPropertyValue('--background')
        );
      }
    });
  }, [theme]);

  return (
    <Box className={cx(styles.switch)} role="button" onClick={handlerChange}>
      <div className={styles.dark}>
        <Icon.Moon />
      </div>
      <div className={styles.light}>
        <Icon.Sun />
      </div>
    </Box>
  );
};
