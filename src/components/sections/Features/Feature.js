import React from 'react';
import { GridItem, VStack, Heading, Text,Box } from '@chakra-ui/react';

const Feature = ({ heading, text, ...rest }) => {
  return (
    <GridItem background='gray.100' p={5} {...rest}>
      <VStack>
        <Box as='div'>
          <Heading as='h4' mb={5} size='md' opacity='0.8' mx={0}>
            {heading}
          </Heading>
          <Text align='left' opacity='0.6'>
            {text}
          </Text>
        </Box>
      </VStack>
    </GridItem>
  );
};

export default Feature;
