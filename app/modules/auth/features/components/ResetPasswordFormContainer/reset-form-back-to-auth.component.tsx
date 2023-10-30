import React, { FC } from 'react';
import styles
  from '@/app/modules/auth/features/components/ResetPasswordFormContainer/reset-password-form-container.module.scss';
import { CustomLink } from '@/common';
import { Ribbon } from '@/app/modules/auth/features/components/Ribbon/ribbon.component';

export const ResetFormBackToAuth: FC = () => {
  return (
    <div className={styles.backToAuthWrapper}>
      <Ribbon text="або" />
      <CustomLink href='/accounts/emailsignup' color="primary" weight="bold" size="big">
        Cтворити обліковий запис
      </CustomLink>
    </div>
  );
};

