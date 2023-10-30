import React, { FC, useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import {
  SideBarItemProps,
} from '@/app/modules/layout/types/side-bar-item';
import styles from './authorized-layout.module.scss';

export const SideBarItem: FC<SideBarItemProps> = ({
  icon,
  outlinedIcon,
  text,
  isCollapsed,
  name,
  selectedItem,
  onClick,
}: SideBarItemProps) => {
  const [isActive, setIsActive] = useState(false);
  const {current, extra} = selectedItem;


  useEffect(() => {
    setIsActive([current,extra].includes(name));
  }, [selectedItem, name, current, extra]);

  const handleClick = (): void => {
    onClick(name);
  };

  const currentIcon: string = isActive ? icon : outlinedIcon;

  const sideBarItemStyle: string =
    isActive && extra?.includes(name)
      ? `${styles.sideBarItem} ${styles.collapsed}`
      : `${styles.sideBarItem}`;

  const textStyle: string = isActive
    ? `${styles.sideBarItemText} ${styles.active}`
    : styles.sideBarItemText;

  return (
    <li className={sideBarItemStyle} onClick={handleClick}>
      <Icon className={styles.sideBarItemIcon} icon={currentIcon} />
      {isCollapsed || <span className={textStyle}>{text}</span>}
    </li>
  );
};

