import React, { FC } from 'react';
import { RibbonProps } from '@/app/modules/auth/features';
import styles from './ribbon.module.scss';

export const Ribbon: FC<RibbonProps> = ({ text }: RibbonProps) => {
  return (
    <div className={styles.ribbonWrapper}>
      <div className={styles.ribbon} />
      <div className={styles.text}>{text.toUpperCase()}</div>
      <div className={styles.ribbon} />
    </div>
  );
};
