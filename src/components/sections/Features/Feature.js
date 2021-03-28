import React from 'react';
import {
  GridItem,
  VStack,
  Heading,
  Text,
  Box,
  Image,
  HStack,
} from '@chakra-ui/react';

const CheckedFeatures = ({ feature, ...rest }) => {
  return (
    <HStack mb={3} {...rest}>
      <Image
        src='https://global-uploads.webflow.com/5dc6336c6ade633733ef6e44/5f06cf40a52158da21570f7a_check-mark-blue-circle.svg'
        boxSize='1.2rem'
      ></Image>
      <Text as='span' fontWeight='bold'>
        {feature}
      </Text>
    </HStack>
  );
};

const Feature = ({ heading, text, features, ...rest }) => {
  return (
    <GridItem background='gray.100' p={5} {...rest} borderRadius={5}>
      <VStack>
        <Box as='div'>
          <Heading as='h4' mb={5} size='md' opacity='0.8' mx={[5, 5, 0, 0]}>
            {heading}
          </Heading>
          <Text align='left' opacity='0.6' mb={2}>
            {text}
          </Text>
          {features && features.length > 0 && (
            <Text
              align={['center', 'center', 'left', 'left']}
              opacity='0.6'
              mb={2}
            >
              Examples include...
            </Text>
          )}
          {features &&
            features.length > 0 &&
            features.map((feature) => <CheckedFeatures feature={feature} />)}
        </Box>
      </VStack>
    </GridItem>
  );
};

export default Feature;
