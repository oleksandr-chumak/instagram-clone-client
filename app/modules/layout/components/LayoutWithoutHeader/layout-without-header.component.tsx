import React, { FC } from 'react';
import { Children } from '@/common';
import { LayoutWithoutHeaderFooter } from '@/app/modules/layout/components/LayoutWithoutHeader/layout-without-header-footer.component';
import styles from './layout-without-header.module.scss';
export const LayoutWithoutHeader: FC<Children> = ({ children }: Children) => {
  return (
    <>
      <main className={styles.layoutMain}>{children}</main>
      <LayoutWithoutHeaderFooter />
    </>
  );
};
