import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { Home } from '../pages/core/movie/components/Home';
import { PageComponent } from './core/common/types/page';

export const Index = (): PageComponent => {
  // const t = fetch(
  //   'https://imdb8.p.rapidapi.com/title/get-details?tconst=tt0944947',
  //   {
  //     method: 'GET',
  //     headers: {
  //       'x-rapidapi-host': 'imdb8.p.rapidapi.com',
  //       'x-rapidapi-key': '838761176amshdaafe603dd9b7afp136458jsn05c93bfae298',
  //     },
  //   }
  // )
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((json) => console.log(json))
  //   .catch((err) => {
  //     console.error(err);
  //   });
  return (
    <ChakraProvider>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </ChakraProvider>
  );
};

export default Index;
