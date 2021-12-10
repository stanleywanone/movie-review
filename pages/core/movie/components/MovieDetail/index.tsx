import { Flex, Box, Image } from '@chakra-ui/react';
import { PageComponent } from '../../../common/types/page';
import { MOVIES_POSTER } from '../../api/get';
import { useGetMoiveDetails } from '../../hooks/getMovieDetails';

export interface MovieDetailProps {
  movie: any;
}

const MovieDetail = (): PageComponent => {
  const { movieDetails } = useGetMoiveDetails();
  return (
    <Flex w={'full'} h={'full'}>
      <Box flex="3" bgColor="red.100">
        <Image
          className="ImageStyle"
          key={`${movieDetails?.id} image`}
          src={MOVIES_POSTER + movieDetails?.poster_path}
          alt={movieDetails?.original_title}
        ></Image>
      </Box>
      <Box flex="5" bgColor="blue.100"></Box>
    </Flex>
  );
};

export default MovieDetail;
