
import React from 'react';
import Link from 'next/link';
import styles from './TopBar.module.css';

const Topbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <span>Help Line: +254 (055) 30343</span>
        <span>Email: info@bungoma.go.ke</span>
      </div>
      <div className={styles.right}>
        <Link href="/staff-mail" className={styles.link}>
          Staff Mail
        </Link>
        <Link href="/pages/contactUs" className={styles.link}>
          Contact Us
        </Link>
        <Link href="https://bhrms.co.ke/" className={styles.link} target="_blank" rel="noopener noreferrer">
          BCHRMS
        </Link>
      </div>
    </nav>
  );
};

export default Topbar;
