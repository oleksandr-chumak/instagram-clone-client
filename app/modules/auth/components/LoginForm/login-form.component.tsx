import React, { FC } from 'react';
import { AuthFormContainer } from '@/app/modules/auth/features';
import { Button, Input } from '@/common';
import styles from './login-from.module.scss';
import { AlternativeLoginMethods } from '@/app/modules/auth/components/LoginForm/alternative-login-methods.component';

export const LoginForm: FC = () => {
  return (
    <AuthFormContainer>
      <form className={styles.formWrapper} action="">
        <Input
          placeholder="Номер телефону, ім'я користувача або ел. пошта"
          type="email"
        />
        <Input placeholder="Пароль" type="password" />
        <Button type={'button'} className={styles.submitButton} disabled={true}>
          Увійти
        </Button>
      </form>
      <AlternativeLoginMethods />
    </AuthFormContainer>
  );
};
