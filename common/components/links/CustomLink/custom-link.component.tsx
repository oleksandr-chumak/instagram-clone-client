import React, { ForwardedRef, forwardRef } from 'react';
import { DetailedProps, RefComponent } from '@/common';
import Link from 'next/link';
import styles from './custom-link.module.scss';
import {
  FONT_COLOR,
  FONT_SIZE,
  FONT_WEIGHT,
} from '@/common/components/links/CustomLink/custom-link.constants';

type LinkProps = DetailedProps<HTMLAnchorElement> & {
  href: string;
  weight?: keyof typeof FONT_WEIGHT;
  size?: keyof typeof FONT_SIZE;
  color?: keyof typeof FONT_COLOR;
};

export const CustomLink: RefComponent<HTMLAnchorElement, LinkProps> =
  forwardRef<HTMLAnchorElement, LinkProps>(
    (
      {
        href,
        size = 'small',
        weight = 'normal',
        color = 'primary',
        className,
        ...props
      }: LinkProps,
      ref?: ForwardedRef<HTMLAnchorElement>
    ) => {
      const linkStyle: string = `${FONT_COLOR[color]} ${FONT_WEIGHT[weight]} ${FONT_SIZE[size]}`;

      const linkClassName: string = `${className} ${styles.customLink} ${linkStyle}`;
      return (
        <Link {...props} className={linkClassName} href={href} ref={ref} />
      );
    }
  );

CustomLink.displayName = 'AComponent';
