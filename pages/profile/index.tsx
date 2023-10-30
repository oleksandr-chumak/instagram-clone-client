import { NextPageWithLayout } from '@/pages/_app';
import React, { ReactElement } from 'react';
import UnauthorizedLayout
  from '@/app/modules/layout/components/UnauthorizedLayout/unauthorized-layout.component';

const Profile: NextPageWithLayout = () => {
  return <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium aperiam cum, deleniti dignissimos doloribus eveniet, exercitationem fugiat iure laborum, maiores non officia perferendis placeat provident quas rerum sint ut!</div>;
};

Profile.getLayout = function getLayout(page: ReactElement): React.JSX.Element {
  return <UnauthorizedLayout>{page}</UnauthorizedLayout>;
};

export default Profile;
