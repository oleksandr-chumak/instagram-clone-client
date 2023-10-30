import type { FC, ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import '../styles/global.css';

export type NextPageWithLayout<P = NonNullable<unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

type GetLayoutFunction = (page: ReactElement) => ReactElement;

const MyApp: FC<AppPropsWithLayout> = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout: GetLayoutFunction = (page: ReactElement): ReactElement => {
    if (Component.getLayout) {
      return Component.getLayout(page) as ReactElement;
    }
    return page;
  };

  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
