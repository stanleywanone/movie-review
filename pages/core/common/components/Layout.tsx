import { Box, Flex } from '@chakra-ui/react';
import { PageComponent } from '../../common/types/page';
import { Header } from '../../movie/components/Header';
import { Side } from '../../movie/components/Side';

/**Color map :1B262C, 0F4C75, 3282B8 BBE1FA */
export const Layout = ({ children }): PageComponent => {
  return (
    <Flex flexDir="column" p={1} backgroundColor="#1B262C" h={'full'}>
      <Header />
      <Flex overflow="scroll" h={'full'}>
        <Box flex="1" h={'full'}>
          <Side />
        </Box>
        <Box flex="7">{children}</Box>
      </Flex>
    </Flex>
  );
};

export default Layout;
