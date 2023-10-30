import { FC } from 'react';
import styles from './side-bar-modal-window-container.module.scss';
import { Children } from '@/common';

export const SideBarModalWindowContainer: FC<Children> = ({
  children,
}: Children) => {
  return <div className={styles.sideBarModalWindowContainer}>{children}</div>;
};
