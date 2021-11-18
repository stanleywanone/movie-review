import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { Home } from '../pages/core/movie/components/Home';
import { PageComponent } from './core/common/types/page';

export const Index = (): PageComponent => {
  return (
    <div style={{ height: '100%' }}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ height: '100vh' }}>
        {' '}
        <ChakraProvider>
          <Home />
        </ChakraProvider>
      </div>
    </div>
  );
};

export default Index;
