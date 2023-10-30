import { DetailedProps } from '@/common';
import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

export type InputProps = DetailedProps<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>;

export type ButtonProps = DetailedProps<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>;
