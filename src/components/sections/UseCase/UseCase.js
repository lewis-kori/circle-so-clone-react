import Single from '../Review/Single';
import Examples from './Examples';
import { Heading, Flex } from '@chakra-ui/react';
const UseCase = () => {
  return (

      <Flex direction='column' mt={100}>
        <Heading as='h1' fontSize={['sm', 'x-large']} textAlign='center'>
          Organize your discussions in public or private spaces
        </Heading>
        <Single
          text='You can make Circle work for your community. Circle is flexible, white-labeled, and powers diverse community types.'
          my={5}
        />
        <Examples />
      </Flex>
  );
};

export default UseCase;
