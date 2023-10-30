import React, { FC } from 'react';
import { Ribbon } from '@/app/modules/auth/features/components/Ribbon/ribbon.component';
import { Button } from '@/common';
import styles from './registration-form.module.scss';

export const AlternativeRegistrationMethods: FC = () => {
  return (
    <div className={styles.alternativeRegistrationMethods}>
      <p className={styles.userPrompting}>Зареєструйтеся, щоб переглядати світлини та відео від друзів.</p>
      <Button icon='facebook' style={{width: '100%'}}>Увійдіть через Facebook</Button>
      <Ribbon text='або'/>
    </div>
  );
};

