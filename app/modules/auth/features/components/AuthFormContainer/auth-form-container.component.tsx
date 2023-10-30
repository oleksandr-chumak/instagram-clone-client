import React, { FC } from 'react';
import styles from './auth-form-container.module.scss';
import { Children } from '@/common';
import Image from 'next/image';

export const AuthFormContainer: FC<Children> = ({ children }: Children) => {
  return (
    <div className={styles.authFormContainer}>
      <div className={styles.authLogoContainer}>
        <Image
          src="http://localhost:3000/instagram-wordmark.svg"
          width={200}
          height={65}
          alt="Logo"
        />
      </div>
      {children}
    </div>
  );
};
