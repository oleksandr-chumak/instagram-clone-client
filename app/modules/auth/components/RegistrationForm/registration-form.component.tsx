import React, { FC } from 'react';
import {
  ApplicationPolicy,
  AuthFormContainer,
} from '@/app/modules/auth/features';
import { Button, Input } from '@/common';
import styles from './registration-form.module.scss';
import { AlternativeRegistrationMethods } from '@/app/modules/auth/components/RegistrationForm/alternative-registration-methods.component';

export const RegistrationForm: FC = () => {
  return (
    <AuthFormContainer>
      <AlternativeRegistrationMethods />
      <form action="" className={styles.formWrapper}>
        <Input placeholder="Номер мобільного телефону або електронна адреса" />
        <Input placeholder="Повне ім'я" />
        <Input placeholder="Ім'я користувача" />
        <Input placeholder="Пароль" />
        <ApplicationPolicy />
        <Button disabled={true}>Далі</Button>
      </form>
    </AuthFormContainer>
  );
};
