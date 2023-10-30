import { FC } from 'react';
import styles from './application-policy.module.scss';

export const ApplicationPolicy: FC = () => {
  return (
    <p className={styles.applicationPolicyWrapper}>
      <span className={styles.applicationPolicyText}>
        Люди, які користуються нашим сервісом, могли завантажити вашу контактну
        інформацію в Instagram.{' '}
        <span className={styles.applicationPolicyLink}>Докладніше</span>
      </span>
      <br/>
      <span className={styles.applicationPolicyText}>
        Реєструючись, ви приймаєте наші{' '}
        <span className={styles.applicationPolicyLink}>Умови</span>. Докладніше
        про те, як ми збираємо, використовуємо й поширюємо ваші дані див. в
        нашій{' '}
        <span className={styles.applicationPolicyLink}>
          Політиці конфіденційності
        </span>
        , а про використання файлів cookie та подібні технології див. нашу{' '}
        <span className={styles.applicationPolicyLink}>
          Політику щодо файлів cookie
        </span>
        .
      </span>
    </p>
  );
};
