import React, { FC } from 'react';
import UnauthorizedLayoutHeader from '@/app/modules/layout/components/UnauthorizedLayout/unauthorized-layout-header.component';
import UnauthorizedLayoutContainer from '@/app/modules/layout/components/UnauthorizedLayout/unauthorized-layout-container.component';
import UnauthorizedLayoutFooter from '@/app/modules/layout/components/UnauthorizedLayout/unauthorized-layout-footer.component';
import { Children } from '@/common';

const UnauthorizedLayout: FC<Children> = ({ children }: Children) => {
  return (
    <>
      <UnauthorizedLayoutHeader />
      <UnauthorizedLayoutContainer>{children}</UnauthorizedLayoutContainer>
      <UnauthorizedLayoutFooter />
    </>
  );
};

export default UnauthorizedLayout;
