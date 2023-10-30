import { FC } from 'react';
import { ButtonProps } from '@/common';
import styles from './button.module.scss';
import {
  BUTTON_ICON,
  BUTTON_ICON_COLOR,
} from '@/common/components/buttons/Button/button.constants';
import { Icon } from '@iconify/react';

type CustomButtonProps = ButtonProps & {
  icon?: keyof typeof BUTTON_ICON;
};

export const Button: FC<CustomButtonProps> = ({
  disabled,
  icon,
  children,
  ...props
}: CustomButtonProps) => {
  const buttonIcon: string | undefined = icon ? BUTTON_ICON[icon] : undefined;
  const buttonIconColor: string | undefined = icon ? BUTTON_ICON_COLOR[icon] : undefined;

  const buttonStyle: string = `${styles.button} ${disabled ? styles.disabled : ''}`;
  const buttonClassName: string = `${buttonStyle} ${props.className || ''}`;
  return (
    <button {...props} className={buttonClassName} disabled={disabled}>
      {icon && <Icon className={styles.buttonIcon} color={buttonIconColor} icon={buttonIcon}/> }
      {children}
    </button>
  );
};
