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
  h = '100px',
  mb = '300px',
  mr = '20px',
  objectFit = 'cover',
  imageProps = {},
  titleProps = {},
  ...props
}) => {
  const boxStyleProps = {
    w,
    h,
    mb,
    mr,
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
          <Box key={`${item.id} box`} {...boxStyleProps}>
            <Image
              key={`${item.id} image`}
              src={MOVIES_POSTER + item.poster_path}
              alt={item.original_title}
              {...imageStyleProps}
            />
            <Text {...titleStyleProps}>{item.original_title}</Text>
          </Box>
        );
      })}
    </Flex>
  );
};
