import React, { FC } from 'react';
import styles from './authorized-layout.module.scss';
import { Children } from '@/common';
import { AuthorizedFooter } from '@/app/modules/layout/components/AuthorizedLayout/authorized-footer.component';
import { AuthorizedSideBar } from '@/app/modules/layout/components/AuthorizedLayout/authorized-side-bar.component';

export const AuthorizedLayout: FC<Children> = ({ children }: Children) => {
  return (
    <div className={styles.authorizedLayoutWrapper}>
      <AuthorizedSideBar />
      <div className={styles.contentContainer}>
        {children}
        <AuthorizedFooter />
      </div>
    </div>
  );
};
