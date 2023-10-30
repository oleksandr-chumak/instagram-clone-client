import React, { forwardRef, Ref, useId } from 'react';
import { InputProps, RefComponent } from '@/common';
import styles from './input.module.scss';

export const Input: RefComponent<
  HTMLInputElement,
  InputProps
> = forwardRef(
  (
    { className, placeholder, ...props }: InputProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const id: string = useId();
    return (
      <div className={styles.inputWrapper}>
        <input
          {...props}
          ref={ref}
          id={id}
          className={`${styles.input} ${className || ''}`}
          placeholder={placeholder || 'empty'}
        />
        <label className={styles.label} htmlFor={id}>
          {placeholder}
        </label>
      </div>
    );
  }
);
Input.displayName = 'Input';
