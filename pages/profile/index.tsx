import { NextPageWithLayout } from '@/pages/_app';
import React, { ReactElement } from 'react';
import BaseLayout from '@/app/modules/layout/components/UnauthorizedLayout/unauthorized-layout.component';

const Profile: NextPageWithLayout = () => {
  return <div>hello</div>;
};

Profile.getLayout = function getLayout(page: ReactElement): React.JSX.Element {
  return <BaseLayout>{page}</BaseLayout>;
};

export default Profile;
