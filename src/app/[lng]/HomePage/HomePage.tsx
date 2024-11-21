'use client';

import { Body } from '@/components';

import styles from './HomePage.module.css';
import { License, Cis, OurTeam, Documents } from './components';

export const HomePage = () => {
  return (
    <main className={styles.container}>
      <Body className={styles.license} component="section">
        <License />
      </Body>

      <Body className={styles.cis} component="section">
        <Cis />
      </Body>

      <Body className={styles.team} component="section">
        <OurTeam />
      </Body>

      <Body className={styles.documents} component="section">
        <Documents />
      </Body>
    </main>
  );
};
