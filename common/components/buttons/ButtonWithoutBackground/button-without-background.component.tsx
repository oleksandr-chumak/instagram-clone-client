import React, { FC } from 'react';
import { ButtonProps } from '@/common';
import styles from './button-without-background.module.scss';
import {
  TEXT_COLOR,
  BUTTON_ICON,
} from '@/common/components/buttons/ButtonWithoutBackground/button-without-background.constants';
import { Icon } from '@iconify/react';

type ButtonWithoutBackgroundProps = ButtonProps & {
  icon?: keyof typeof BUTTON_ICON;
  textColor?: keyof typeof TEXT_COLOR;
};
export const ButtonWithoutBackground: FC<ButtonWithoutBackgroundProps> = ({
  className,
  icon,
  textColor = 'primaryBlue',
  children,
  ...props
}: ButtonWithoutBackgroundProps) => {
  const buttonIcon: string | undefined = icon && BUTTON_ICON[icon];

  const buttonTextStyle: string = `${TEXT_COLOR[textColor]}`;

  // className
  const buttonClassName: string = `${styles.buttonWithoutBackground} ${className}`;
  const buttonTextClassName: string = `${styles.buttonSpan} ${buttonTextStyle}`;
  return (
    <button {...props} className={buttonClassName}>
      {buttonIcon && (
        <Icon
          className={styles.buttonIcon}
          icon={buttonIcon}
        />
      )}
      <span className={buttonTextClassName}>{children}</span>
    </button>
  );
};
