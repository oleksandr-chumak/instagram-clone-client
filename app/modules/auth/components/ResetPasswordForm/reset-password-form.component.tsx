import React, { FC } from 'react';
import { Button, Input } from '@/common';
import styles from '../ResetPasswordForm/reset-password-form.module.scss';
import {
  ResetPasswordFormContainer
} from '@/app/modules/auth/features/components/ResetPasswordFormContainer/reset-password-form-container.component';

export const ResetPasswordForm: FC = () => {
  return (
    <ResetPasswordFormContainer>
      <form action="" className={styles.formWrapper}>
        <Input placeholder="Номер мобільного телефону або електронна адреса" />
        <Button disabled={true}>Надіслати посилання для входу</Button>
      </form>
    </ResetPasswordFormContainer>
  );
};
