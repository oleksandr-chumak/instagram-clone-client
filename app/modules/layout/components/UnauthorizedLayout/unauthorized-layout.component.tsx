import React, { FC } from 'react';
import UnauthorizedLayoutHeader from '@/app/modules/layout/components/UnauthorizedLayout/unauthorized-layout-header.component';
import UnauthorizedLayoutContainer from '@/app/modules/layout/components/UnauthorizedLayout/unauthorized-layout-container.component';
import UnauthorizedLayoutFooter from '@/app/modules/layout/components/UnauthorizedLayout/unauthorized-layout-footer.component';
import { UnauthorizedLayoutProps } from '@/app/modules/layout/types/unauthorizedLayout';

const UnauthorizedLayout: FC<UnauthorizedLayoutProps> = ({
  children,
  withAuth = true,
}: UnauthorizedLayoutProps) => {
  return (
    <>
      <UnauthorizedLayoutHeader withAuth={withAuth} />
      <UnauthorizedLayoutContainer>{children}</UnauthorizedLayoutContainer>
      <UnauthorizedLayoutFooter />
    </>
  );
};

export default UnauthorizedLayout;
