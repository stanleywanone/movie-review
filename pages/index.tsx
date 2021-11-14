import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { FirstPost } from '../pages/posts/firstpost';

export const Index = (): any => {
  return (
    <ChakraProvider>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <FirstPost></FirstPost>
    </ChakraProvider>
  );
};

export default Index;
