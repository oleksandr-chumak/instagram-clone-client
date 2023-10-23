import { SelectedItem } from '@/app/modules/layout/types/side-bar';

export interface SideBarItemProps{
  icon: string;
  outlinedIcon: string;
  isCollapsed: boolean;
  text: string;
  name: ITEM_NAME;
  selectedItem: SelectedItem;
  onClick: (itemName: ITEM_NAME) => void;
}

export enum ITEM_NAME{
  COMPASS= 'compass',
  LIKE = 'like',
  HOME = 'home',
  SEARCH = 'search',
  MESSAGE = 'message',
  ADD = 'add',
  REELS = 'reels'
}

export type extraItems = ITEM_NAME.SEARCH | ITEM_NAME.LIKE;

export type HeaderItemIcon = Record<keyof typeof ITEM_NAME, string>