import React, { FC } from 'react';
import styles from './unauthorized-layout.module.scss';
import { Children } from '@/common';

const UnauthorizedLayoutContainer:FC<Children> = ({children}: Children) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default UnauthorizedLayoutContainer;