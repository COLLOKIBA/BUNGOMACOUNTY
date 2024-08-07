import React from 'react';
import Subhero from './SubHero';
import styles from './GridLayout.module.css';

const GridLayout: React.FC = () => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.row}>
        <div className={styles.subheroContainer}>
          <Subhero />
        </div>
        <div className={styles.picturesContainer}>
          <img src="/KLM.jpg" alt="Picture 1" className={styles.picture}/>
        </div>
      </div>
      <div className={styles.row}>
      </div>
    </div>
  );
};

export default GridLayout;
