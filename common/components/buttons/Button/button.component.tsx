import { FC } from 'react';
import { ButtonProps } from '@/common';
import styles from './button.module.scss';

export const Button: FC<ButtonProps> = ({...props}: ButtonProps) => {
  return <button {...props} className={`${props.className} ${styles.button}`}></button>;
};

