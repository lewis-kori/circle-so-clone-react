import React from 'react';
import { SkeletonText, Image, Text, Flex } from '@chakra-ui/react';
import { PropTypes } from 'prop-types';
const Person = ({ name, image, lines, ...rest }) => {
  return (
    <Flex wrap='wrap' pl={[10, 4]} pt={2} {...rest}>
      <Image
        boxSize='20px'
        borderRadius='full'
        src={image}
        alt='Segun Adebayo'
      />
      <Text ml={2}>{name}</Text>
      <SkeletonText
        mt={0}
        ml={7}
        mr={10}
        mb={lines ? 1 : 0}
        w='70%'
        noOfLines={lines ? lines : 1}
        height='20px'
        startColor='gray.200'
        endColor='gray.200'
      />
    </Flex>
  );
};

export default Person;

Person.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

Person.defaultProps = {
  name: 'Eleri Benson',
  image: 'https://bit.ly/sage-adebayo',
};
