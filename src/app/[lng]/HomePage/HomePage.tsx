'use client';

import cx from 'classnames';

import { Body, Layout } from '@/components';

import styles from './HomePage.module.css';
import { License, Cis, OurTeam, Documents } from './components';

export const HomePage = () => {
  return (
    <Layout>
      <main className={styles.container}>
        <Body className={cx(styles.license)} component={'section'}>
          <License />
        </Body>

        <Body className={cx(styles.section, styles.cis)} component={'section'}>
          <Cis />
        </Body>

        <Body className={cx(styles.section, styles.team)} component={'section'}>
          <OurTeam />
        </Body>

        <Body
          className={cx(styles.section, styles.documents)}
          component={'section'}
        >
          <Documents />
        </Body>
      </main>
    </Layout>
  );
};
