import React from 'react';
import { Heading, Button, Text, Stack, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const MainHero = ({ title, subtitle, ctaLink, ctaText, ...rest }) => {
  return (
    <Flex
      align='center'
      justify='center'
      direction='row'
      wrap='no-wrap'
      minH='40vh'
      px={8}
      mb={16}
      {...rest}
    >
      <Stack spacing={4} w='70%'>
        {/* main heading */}
        <Heading as='h2' size='xl' textAlign='center'>
          {title}
        </Heading>
        {/* subtitle */}
        <Heading
          as='h4'
          size='md'
          opacity='0.7'
          fontWeight='normal'
          lineHeight={1.5}
          textAlign='center'
        >
          {subtitle}
        </Heading>

        {/* cta button */}
        <Link to={ctaLink}>
          <Flex justify='center'>
            <Button
              colorScheme='blue'
              size='lg'
              py='4'
              px='4'
              lineHeight='1'
              borderRadius='8px'
            >
              {ctaText}
            </Button>
          </Flex>
        </Link>
        <Text
          fontSize='xs'
          mt={2}
          textAlign='center'
          color='pink.500'
          opacity='0.6'
        >
          No credit card required
        </Text>
      </Stack>
    </Flex>
  );
};

export default MainHero;

MainHero.propTypes = {
  title: PropTypes.object,
  subtitle: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
};

MainHero.defaultProps = {
  title: 'The modern community platform for creators',
  subtitle:
    'Bring together your discussions, memberships, and content. Integrate a thriving community wherever your audience is, all under your own brand.',
  ctaText: 'Start your 14 day free trial',
  ctaLink: '/start',
};
