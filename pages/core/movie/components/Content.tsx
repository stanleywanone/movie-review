import { PageComponent } from '../../common/types/page';
import { HStack, Image, Square, Flex } from '@chakra-ui/react';

export const Content = (): PageComponent => {
  return (
    <Flex>
      <HStack>
        <Square>
          <Image
            boxSize="100px"
            objectFit="cover"
            src="https://bit.ly/sage-adebayo"
            alt="Segun Adebayo"
          />
        </Square>
      </HStack>
    </Flex>
  );
};
