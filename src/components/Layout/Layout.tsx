'use client';

import React, { PropsWithChildren } from 'react';

import { cx } from '@/theme';
import { Icon } from '@/ui';

import { Footer } from './Footer';
import styles from './Layout.module.css';
import { ThemeSwitch } from './ThemeSwitch';

export interface LayoutProps {
  className?: string;
}

export const Layout = ({
  children,
  className,
}: LayoutProps & PropsWithChildren) => {
  return (
    <div className={cx(styles.layout, className)}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <Icon.Logo />
          <ThemeSwitch />
        </header>

        {children}
      </div>

      <Footer className={styles.wrapper} />
    </div>
  );
};
