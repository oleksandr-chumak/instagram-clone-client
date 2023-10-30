import { FC } from 'react';
import { DetailedProps } from '@/common';
import styles from './outlined-button.module.scss';

type ButtonProps = DetailedProps<HTMLButtonElement>;

export const OutlinedButton: FC<ButtonProps> = ({
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`${props.className} ${styles.outlinedButton}`}
    ></button>
  );
};
