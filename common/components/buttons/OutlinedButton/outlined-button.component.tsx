import { FC } from 'react';
import { ButtonProps } from '@/common';
import styles from  './outlined-button.module.scss';

export const OutlinedButton: FC<ButtonProps> = ({ ...props }: ButtonProps) => {
  return <button {...props} className={`${props.className} ${styles.outlinedButton}`}></button>;
};
