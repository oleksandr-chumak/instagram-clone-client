import {
  extraItems,
  HeaderItemIcon,
  SideBarItemProps,
  ITEM_NAME,
} from '@/app/modules/layout/types/side-bar-item';
import { ICON, OUTLINED_ICON } from '@/app/modules/layout/constants/icon';
import { FC } from 'react';
import {
  NotificationModalWindow,
  SearchModalWindow,
} from '@/app/modules/sideBarModalWindow';

export const SIDE_BAR_ITEM_PROPS: Record<keyof HeaderItemIcon, Omit<SideBarItemProps, 'onClick' | 'selectedItem' | 'isCollapsed'>> = {
  HOME: {
    icon: ICON.HOME,
    outlinedIcon: OUTLINED_ICON.HOME,
    text: 'Головна',
    name: ITEM_NAME.HOME
  },
  SEARCH: {
    icon: ICON.SEARCH,
    outlinedIcon: OUTLINED_ICON.SEARCH,
    text: 'Пошук',
    name: ITEM_NAME.SEARCH
  },
  COMPASS: {
    icon: ICON.COMPASS,
    outlinedIcon: OUTLINED_ICON.COMPASS,
    text: 'Цікаве',
    name: ITEM_NAME.COMPASS
  },
  REELS: {
    icon: ICON.REELS,
    outlinedIcon: OUTLINED_ICON.REELS,
    text: 'Reels',
    name: ITEM_NAME.REELS
  },
  MESSAGE: {
    icon: ICON.MESSAGE,
    outlinedIcon: OUTLINED_ICON.MESSAGE,
    text: 'Повідомлення',
    name: ITEM_NAME.MESSAGE
  },
  LIKE: {
    icon: ICON.LIKE,
    outlinedIcon: OUTLINED_ICON.LIKE,
    text: 'Сповіщення',
    name: ITEM_NAME.LIKE
  },
  ADD: {
    icon: ICON.ADD,
    outlinedIcon: OUTLINED_ICON.ADD,
    text: 'Створити',
    name: ITEM_NAME.ADD
  }
};

export const MODAL_WINDOW: Record<extraItems, FC> = {
  [ITEM_NAME.LIKE]: NotificationModalWindow,
  [ITEM_NAME.SEARCH]: SearchModalWindow,
};