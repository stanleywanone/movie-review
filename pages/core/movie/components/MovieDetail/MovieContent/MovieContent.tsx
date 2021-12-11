import { FC } from 'react';
import { Flex, Text, Link } from '@chakra-ui/react';

interface MovieContentProps {
  movieDetails?: any;
}

export const MovieContent: FC<MovieContentProps> = ({ movieDetails }) => {
  return (
    <Flex flexDir="column" p={3} fontSize="lg">
      <Flex flexDir="column" pb={3} fontStyle="italic">
        <Text fontWeight="bold">Movie</Text>
        <Text>{movieDetails?.original_title}</Text>
      </Flex>
      <Flex flexDir="column" pb={3} fontStyle="italic">
        <Text fontWeight="bold">Release Date</Text>
        <Text>{movieDetails?.release_date}</Text>
      </Flex>
      <Flex flexDir="column" pb={3} fontStyle="italic">
        <Text fontWeight="bold">Genres</Text>
        <Text>
          {movieDetails?.genres.map((genre) => {
            return genre.name + ', ';
          })}
        </Text>
      </Flex>
      <Flex flexDir="column" pb={3} fontStyle="italic">
        <Text fontWeight="bold">Overview</Text>
        <Text>{movieDetails?.overview}</Text>
      </Flex>
      <Flex flexDir="column" pb={3} fontStyle="italic">
        <Text fontWeight="bold">Country</Text>
        <Text>{movieDetails?.production_countries[0].name}</Text>
      </Flex>

      <Flex flexDir="column" pb={3} fontStyle="italic">
        <Text fontWeight="bold">Revenue</Text>
        <Text>$ {movieDetails?.revenue}</Text>
      </Flex>
      <Flex flexDir="column" pb={3} fontStyle="italic">
        <Text fontWeight="bold">Website</Text>
        <Link href={movieDetails?.homepage}>{movieDetails?.homepage}</Link>
      </Flex>
    </Flex>
  );
};
