import React, { FC } from 'react';
import styles from './unauthorized-layout.module.scss';
import Image from 'next/image';
import { Button, OutlinedButton } from '@/common';

const UnauthorizedLayoutHeader: FC = () => {
  return (
    <div className={styles.headerWrapper}>
      <nav className={`${styles.container} ${styles.headerNavigation}`}>
        <div className={styles.logoWrapper}>
          <Image
            src="instagram-wordmark.svg"
            width={103}
            height={29}
            alt="Logo"
          />
        </div>
        <div className={styles.headerAuthorization}>
          <Button>Увійти</Button>
          <OutlinedButton>Зареєструватися</OutlinedButton>
        </div>
      </nav>
    </div>
  );
};

export default UnauthorizedLayoutHeader;
