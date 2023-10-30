import React, { ReactElement } from 'react';
import { LayoutWithoutHeader, LoginForm } from '@/app/modules';
import {
  AuthFormNavigatorContainer,
  DownloadApp,
} from '@/app/modules/auth/features';
import { CustomLink } from '@/common';
import { NextPageWithLayout } from '@/pages/_app';

const Login:NextPageWithLayout = () => {
  return (
    <div>
      <LoginForm />
      <AuthFormNavigatorContainer>
        <p>
          Не маєте облікового запису?{' '}
          <CustomLink
            href="/accounts/emailsignup"
            weight="bold"
            color="lightBlue"
          >
            Зареєструйтеся
          </CustomLink>
        </p>
      </AuthFormNavigatorContainer>
      <DownloadApp />
    </div>
  );
};

Login.getLayout = function getLayout(page: ReactElement): React.JSX.Element {
  return <LayoutWithoutHeader>{page}</LayoutWithoutHeader>;
};
export default Login;
