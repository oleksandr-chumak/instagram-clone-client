import React, { FC, useState } from 'react';
import styles from './authorized-layout.module.scss';
import { extraItems, ITEM_NAME } from '@/app/modules/layout/types/side-bar-item';
import {
  SIDE_BAR_ITEM_PROPS,
  MODAL_WINDOW,
} from '@/app/modules/layout/constants/side-bar-items';
import { SelectedItem, StateProps } from '@/app/modules/layout/types/side-bar';
import {
  SideBarItem
} from '@/app/modules/layout/components/AuthorizedLayout/side-bar-item.component';

export const AuthorizedSideBar: FC = () => {
  const [selectedItem, setSelectedItem] = useState<SelectedItem>({
    current: ITEM_NAME.HOME,
    extra: null,
  });
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const stateProps: StateProps = {
    selectedItem: selectedItem,
    isCollapsed: isCollapsed,
  };

  const collapseSideBar = (): void => {
    setIsCollapsed(true);
  };

  const expandSideBar = (): void => {
    setIsCollapsed(false);
  };

  const handleClickWithExpand = (itemName: ITEM_NAME): void => {
    setSelectedItem({ current: itemName, extra: null });
    expandSideBar();
  };

  const handleClickWithCollapse = (itemName: ITEM_NAME): void => {
    setSelectedItem({ current: itemName, extra: null });
    collapseSideBar();
  };

  const handleExtraItemClick = (itemName: ITEM_NAME): void => {
    setSelectedItem((prevState: SelectedItem) => ({
      ...prevState,
      extra: itemName as extraItems,
    }));
    collapseSideBar();
  };

  const sideBarStyle: string = isCollapsed
    ? `${styles.sideBarWrapper} ${styles.collapsed}`
    : `${styles.sideBarWrapper}`;

  const ModalWindow: FC | null =
    selectedItem.extra && MODAL_WINDOW[selectedItem.extra];

  return (
    <>
      <div className={sideBarStyle}>
        <ul className={styles.sideBarList}>
          <SideBarItem
            {...SIDE_BAR_ITEM_PROPS.HOME}
            {...stateProps}
            onClick={handleClickWithExpand}
          />
          <SideBarItem
            {...SIDE_BAR_ITEM_PROPS.SEARCH}
            {...stateProps}
            onClick={handleExtraItemClick}
          />
          <SideBarItem
            {...SIDE_BAR_ITEM_PROPS.COMPASS}
            {...stateProps}
            onClick={handleClickWithExpand}
          />
          <SideBarItem
            {...SIDE_BAR_ITEM_PROPS.REELS}
            {...stateProps}
            onClick={handleClickWithExpand}
          />
          <SideBarItem
            {...SIDE_BAR_ITEM_PROPS.MESSAGE}
            {...stateProps}
            onClick={handleClickWithCollapse}
          />
          <SideBarItem
            {...SIDE_BAR_ITEM_PROPS.LIKE}
            {...stateProps}
            onClick={handleExtraItemClick}
          />
          <SideBarItem
            {...SIDE_BAR_ITEM_PROPS.ADD}
            {...stateProps}
            onClick={handleClickWithExpand}
          />
        </ul>
      </div>
      {ModalWindow && <ModalWindow />}
    </>
  );
};
