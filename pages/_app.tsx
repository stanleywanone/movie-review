// export default App;
import { FC } from 'react';
import { PageComponent } from '@/core/common/types/page';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme/index';
import { Layout } from './core/common/components/Layout/Layout';

export const App: FC<{
  Component: PageComponent;
  pageProps: any;
}> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <div style={{ height: '100vh' }}>
      <ChakraProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </div>
  );
};

export default App;
