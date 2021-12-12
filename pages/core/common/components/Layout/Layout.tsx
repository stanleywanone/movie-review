import { Box, Flex } from '@chakra-ui/react';
import { PageComponent } from '@/core/common/types/page';
import { Header } from '../Header';
import { Sider } from '../Sider';

/**Color map :1B262C, 0F4C75, 3282B8 BBE1FA */
export const Layout = ({ children }): PageComponent => {
  return (
    <Flex flexDir="column" p={1} backgroundColor={'dark.400'} h={'full'}>
      <Header />
      <Flex overflow="scroll" h={'full'}>
        <Box flex="1">
          <Sider />
        </Box>
        <Box flex="7">{children}</Box>
      </Flex>
    </Flex>
  );
};
