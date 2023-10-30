import React, { FC } from 'react';
import styles from './unauthorized-layout.module.scss';
import Image from 'next/image';
import { Button, OutlinedButton } from '@/common';
import { UnauthorizedLayoutHeaderProps } from '@/app/modules/layout/types/unauthorizedLayoutHeader';

const UnauthorizedLayoutHeader: FC<UnauthorizedLayoutHeaderProps> = ({
  withAuth,
}: UnauthorizedLayoutHeaderProps) => {
  return (
    <div className={styles.headerWrapper}>
      <nav className={`${styles.container} ${styles.headerNavigation}`}>
        <div className={styles.logoWrapper}>
          <Image
            src="http://localhost:3000/instagram-wordmark.svg"
            width={103}
            height={29}
            alt="Logo"
          />
        </div>
        {withAuth && (
          <div className={styles.headerAuthorization}>
            <Button>Увійти</Button>
            <OutlinedButton>Зареєструватися</OutlinedButton>
          </div>
        )}
      </nav>
    </div>
  );
};

export default UnauthorizedLayoutHeader;
