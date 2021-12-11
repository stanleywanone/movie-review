import { FC } from 'react';
import { useRouter } from 'next/router';
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
  overviewProps?: TextProps;
  overlayProps?: BoxProps;
}

export const Poster: FC<PosterProps> = ({
  items = [],
  w = '200px',
  objectFit = 'scale-down',
  imageProps = {},
  titleProps = {},
  overviewProps = { fontSize: 'sm', fontStyle: 'italic', zIndex: 3, p: 1 },
  overlayProps = {
    bottom: 0,
    position: 'absolute',
    overflow: 'hidden',
    w: 'full',
    h: 0,
    transition: '0.3s',
    flexDir: 'column',
  },
  ...props
}) => {
  const router = useRouter();
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

  const overviewStyleProps = {
    ...overviewProps,
  };

  const overlayStyleProps = {
    ...overlayProps,
  };

  return (
    <Flex flexWrap="wrap" mt={2} justifyContent="space-evenly">
      {items.map((item) => {
        return (
          <>
            <Box mr={5} mb={4}>
              <Flex
                key={`${item.id} box`}
                flexWrap="wrap"
                w="200px"
                _hover={{
                  '.Overlay': {
                    height: '60%',
                    bgColor: 'dark.400',
                  },
                  '.Cover': {
                    bgColor: 'transparentColor',
                  },
                }}
                onClick={() =>
                  router.push(
                    `/core/movie/components/MovieDetail?id=${item.id}`
                  )
                }
                cursor="pointer"
                position={'relative'}
              >
                <Image
                  className="ImageStyle"
                  key={`${item.id} image`}
                  src={MOVIES_POSTER + item.poster_path}
                  alt={item.original_title}
                  {...imageStyleProps}
                />
                <Box
                  className="Cover"
                  position="absolute"
                  w={'full'}
                  h={'full'}
                />

                <Flex className="Overlay" {...overlayStyleProps}>
                  <Text fontWeight="bold" {...overviewStyleProps}>
                    Overview:
                  </Text>
                  <Text {...overviewStyleProps}>
                    {item.overview.substring(0, 150)}...
                  </Text>
                </Flex>
              </Flex>

              <Box {...boxStyleProps} mt={2}>
                <Text {...titleStyleProps}>{item.original_title}</Text>
              </Box>
            </Box>
          </>
        );
      })}
    </Flex>
  );
};
