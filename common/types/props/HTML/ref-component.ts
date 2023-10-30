import { ForwardRefExoticComponent, RefAttributes } from 'react';

export type RefComponent<HTMLElement, Props> = ForwardRefExoticComponent<
  Omit<Props, 'ref'> & RefAttributes<HTMLElement>
>;