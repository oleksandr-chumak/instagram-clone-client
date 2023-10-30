import React, { ReactElement } from 'react';
import { ResetPasswordForm } from '@/app/modules/auth/components/ResetPasswordForm/reset-password-form.component';
import { NextPageWithLayout } from '@/pages/_app';
import UnauthorizedLayout
  from '@/app/modules/layout/components/UnauthorizedLayout/unauthorized-layout.component';

const Reset: NextPageWithLayout = () => {
  return (
    <div>
      <ResetPasswordForm/>
    </div>
  );
};

Reset.getLayout = function getLayout(page: ReactElement): React.JSX.Element {
  return <UnauthorizedLayout withAuth={false}>{page}</UnauthorizedLayout>;
};

export default Reset;
