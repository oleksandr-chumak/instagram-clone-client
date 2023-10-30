import { Children } from '@/common';

export type UnauthorizedLayoutProps = Children & {
  withAuth?: boolean;
};