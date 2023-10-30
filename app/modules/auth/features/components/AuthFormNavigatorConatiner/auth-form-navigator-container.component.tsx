import React, { FC } from 'react';
import { Children } from '@/common';
import styles from './auth-form-navigator-container.module.scss';

export const AuthFormNavigatorContainer:FC<Children> = ({children}: Children) => {
  return (
    <div className={styles.authFormNavigatorContainer}>
      {children}
    </div>
  );
};

