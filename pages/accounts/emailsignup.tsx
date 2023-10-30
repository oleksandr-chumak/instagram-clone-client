import React, { ReactElement } from 'react';
import { LayoutWithoutHeader, RegistrationForm } from '@/app/modules';
import { NextPageWithLayout } from '@/pages/_app';
import {
  AuthFormNavigatorContainer,
  DownloadApp,
} from '@/app/modules/auth/features';
import { CustomLink } from '@/common';

const Registration: NextPageWithLayout = () => {
  return (
    <div>
      <RegistrationForm />
      <AuthFormNavigatorContainer>
        <p>
          У вас є обліковий запис?{' '}
          <CustomLink
            href="/accounts/login"
            size={'medium'}
            weight="semiBold"
            color="lightBlue"
          >
            Увійдіть
          </CustomLink>
        </p>
      </AuthFormNavigatorContainer>
      <DownloadApp />
    </div>
  );
};

Registration.getLayout = function getLayout(
  page: ReactElement
): React.JSX.Element {
  return <LayoutWithoutHeader>{page}</LayoutWithoutHeader>;
};
export default Registration;
