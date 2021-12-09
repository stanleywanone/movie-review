import { FC } from 'react';
import {
  BoxProps,
  Flex,
  Box,
  Image,
  Text,
  ImageProps,
  TextProps,
} from '@chakra-ui/react';
import { MOVIES_POSTER } from '../../../movie/api/get';

interface PosterProps extends BoxProps {
  items: any[];
  boxProps?: BoxProps;
  imageProps?: ImageProps;
  titleProps?: TextProps;
}

export const Poster: FC<PosterProps> = ({
  items = [],
  w = '200px',

  objectFit = 'scale-down',
  imageProps = {},
  titleProps = {},
  ...props
}) => {
  const boxStyleProps = {
    w,

    ...props,
  };

  const imageStyleProps = {
    objectFit,
    ...imageProps,
  };

  const titleStyleProps = {
    ...titleProps,
  };

  return (
    <Flex flexWrap="wrap" mt={2}>
      {items.map((item) => {
        return (
          <>
            <Box mr={5} mb={2}>
              <Flex key={`${item.id} box`} position={'relative'}>
                <Image
                  key={`${item.id} image`}
                  src={MOVIES_POSTER + item.poster_path}
                  alt={item.original_title}
                  position="absolute"
                  {...imageStyleProps}
                />

                <Flex
                  {...boxStyleProps}
                  h="300px"
                  alignItems="end"
                  justifyContent="end"
                  position="relative"
                  _hover={{
                    '.description': {
                      height: '200px',
                      bgColor: 'dark.400',
                    },
                  }}
                >
                  <Box
                    {...boxStyleProps}
                    h="0px"
                    className="description"
                    position="relative"
                    transitionProperty="height"
                    transitionDuration="0.3s"
                    transitionTimingFunction="linear"
                    zIndex={1}
                  ></Box>
                </Flex>
              </Flex>
              <Box {...boxStyleProps}>
                <Text {...titleStyleProps}>{item.original_title}</Text>
              </Box>
            </Box>
          </>
        );
      })}
    </Flex>
  );
};
