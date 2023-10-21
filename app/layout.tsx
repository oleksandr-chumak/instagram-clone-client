import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React, { FC, ReactNode } from 'react';
import { NextFont } from 'next/dist/compiled/@next/font';

const inter: NextFont = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }: RootLayoutProps) => {
  const test = async (): Promise<void> => {
    const response: Response = await fetch('http://nginx:80', {
      method: 'get',
    });
    console.log(await response.text());
  };

  test();

  const hello: string = '';
  console.log(hello);
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;