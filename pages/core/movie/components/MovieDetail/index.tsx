import { Flex, Box, Image } from '@chakra-ui/react';
import { PageComponent } from '../../../common/types/page';
import { MOVIES_POSTER } from '../../api/get';
import { useGetMoiveDetails } from '../../hooks/getMovieDetails';
import { MovieContent } from './MovieContent/MovieContent';

export interface MovieDetailProps {
  movie: any;
}

const MovieDetail = (): PageComponent => {
  const { movieDetails } = useGetMoiveDetails();
  return (
    <Flex w={'full'} h={'full'}>
      <Flex
        flex="3"
        // bgColor="red.100"
        justifyContent="space-around"
        alignItems="center"
      >
        <Image
          className="ImageStyle"
          key={`${movieDetails?.id} image`}
          src={MOVIES_POSTER + movieDetails?.poster_path}
          alt={movieDetails?.original_title}
        />
      </Flex>
      <Box flex="5" color="lightBlue.300">
        <MovieContent movieDetails={movieDetails} />
      </Box>
    </Flex>
  );
};

export default MovieDetail;
