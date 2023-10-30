import { FC } from 'react';
import styles from '@/app/modules/auth/components/LoginForm/login-from.module.scss';
import { Ribbon } from '@/app/modules/auth/features/components/Ribbon/ribbon.component';
import { ButtonWithoutBackground, CustomLink } from '@/common';

export const AlternativeLoginMethods: FC = () => {
  return (
    <div className={styles.alternativeLoginMethodsWrapper}>
      <Ribbon text="Aбо" />
      <ButtonWithoutBackground icon="facebook">
        Увійти через Facebook
      </ButtonWithoutBackground>
      <CustomLink href="/accounts/password/reset" color="primaryBlue" size="small">
        Забули пароль?
      </CustomLink>
    </div>
  );
};
