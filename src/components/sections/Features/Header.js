import React from 'react';
import { Flex, Stack, Heading } from '@chakra-ui/react';

const Header = ({ title, subtitle, ...rest }) => {
  return (
    <Flex
      align='center'
      // justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
      justify='center'
      direction={{ md: 'row' }}
      wrap='no-wrap'
      minH='20vh'
      px={8}
      mb={2}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: '80%', md: '90%', lg: '50%' }}
        align='center'
      >
        <Heading
          as='h3'
          size='md'
          fontWeight='bold'
          color='primary.800'
          textAlign='center'
        >
          {title}
        </Heading>
        <Heading
          as='h6'
          size='md'
          color='primary.400'
          opacity='0.6'
          fontWeight='light'
          lineHeight={1.5}
          textAlign='center'
        >
          {subtitle}
        </Heading>
      </Stack>
    </Flex>
  );
};

export default Header;

Header.defaultProps = {
  title: "Easily set up a premium community for every use-case",
  subtitle:
    "You can make Circle work for your project. Circle is flexible, white-labeled, and powers hundreds of diverse community types.",
};