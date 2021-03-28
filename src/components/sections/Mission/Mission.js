import React from 'react';
import { Flex, Text, Button, VStack, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Mission = ({ ctaLink, ctaText }) => {
  const imageUrl = "url('https://global-uploads.webflow.com/5dc6336c6ade633733ef6e44/5f2acb2cbba8032240f4d5dd_creators-right%402x.jpg')"
  return (
    <Flex
      as='section'
      direction='row'
      height='36rem'
      bgImage={['none', 'none', imageUrl, imageUrl]}
      // background='tomato'
      backgroundSize='cover'
      align='center'
      justify='center'
      mt={4}
    >
      <VStack fontWeight='normal' backgroundColor='gray.50' w={['80%','80%', '50%']} h='100%' mt={10} p={5}>
        <Heading as='h2' fontWeight='bold' fontSize='xl'>
          We built Circle for creators like you
        </Heading>
        <Text w='50%' align='center'>
          Communities are the shelf life of independent online creators. They
          build connections among members, enable profound experiences, and
          empower vocal advocates.
        </Text>
        <Text w='50%' align='center'>
          But after speaking to hundreds of creators, we observed them struggle
          with co-opted products, stitch together subpar solutions, and wrestle
          with discussion boards that went stale.
        </Text>
        <Text mb={3} w='50%' align='center'>
          So, we built Circle: a community platform that integrates with your
          creator stack and transforms your passive audience into passionate
          superfans for life.
        </Text>

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
      </VStack>
    </Flex>
  );
};
export default Mission;
