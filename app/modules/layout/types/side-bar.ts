import { extraItems, ITEM_NAME } from '@/app/modules/layout/types/side-bar-item';

export interface SelectedItem {
  current: ITEM_NAME;
  extra: extraItems | null;
}

export interface StateProps {
  selectedItem: SelectedItem;
  isCollapsed: boolean;
}
