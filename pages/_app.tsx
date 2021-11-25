// export default App;
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { Layout } from './core/common/components/Layout';

type GetLayout = (page: ReactNode) => ReactNode;

// eslint-disable-next-line @typescript-eslint/ban-types
type Page<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: GetLayout;
};

// eslint-disable-next-line @typescript-eslint/ban-types
type MyAppProps<P = {}> = AppProps<P> & {
  Component: Page<P>;
};

export const App = ({ Component, pageProps }: MyAppProps): JSX.Element => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <div style={{ height: '100vh' }}>
      <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
    </div>
  );
};

export default App;
