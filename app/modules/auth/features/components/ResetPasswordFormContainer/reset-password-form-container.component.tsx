import React, { FC } from 'react';
import styles from './reset-password-form-container.module.scss';
import { Icon } from '@iconify/react';
import { Children, CustomLink } from '@/common';
import {
  ResetFormBackToAuth
} from '@/app/modules/auth/features/components/ResetPasswordFormContainer/reset-form-back-to-auth.component';

export const ResetPasswordFormContainer: FC<Children> = ({
  children,
}: Children) => {
  return (
    <div className={styles.resetPasswordFormContainer}>
      <Icon icon="teenyicons:lock-circle-outline" height={96} />
      <h2 className={styles.resetPasswordHeader}>Не вдається ввійти?</h2>
      <p className={styles.resetPasswordInformation}>
        Укажіть електронну адресу, номер телефону або ім&apos;я користувача і ми
        надішлемо вам посилання для відновлення доступу до облікового запису.
      </p>
      {children}
      <CustomLink href={'#'} color="primaryBlue">
        Не вдається скинути пароль?
      </CustomLink>
      <ResetFormBackToAuth/>
      <div className={styles.backToLoginWrapper}>
        <CustomLink href="/accounts/login" weight="bold" size="big">
          Назад до входу
        </CustomLink>
      </div>
    </div>
  );
};
