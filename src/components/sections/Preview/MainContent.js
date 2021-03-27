import React from 'react';
import { Flex, Text, VStack, HStack, Image } from '@chakra-ui/react';
import Person from './Person';

const MainContent = () => {
  return (
    <Flex
      w='50%'
      borderWidth='1px'
      borderRadius='lg'
      borderBottom='none'
      overflow='hidden'
      mt={7}
      ml={5}
      background='white'
      padding={6}
      h='68.4vh'
    >
      <VStack>
        <Text as='h6' mr='11.5rem'>
          Live session 42 - Mindful parenting
        </Text>
        <Person
          width='100%'
          name='Adele Farley'
          image='https://global-uploads.webflow.com/5dc6336c6ade633733ef6e44/5f3270e314289158a682f753_avatar-member-current.png'
          lines={2}
          mb='0px'
        />
        <Flex direction='row' width='100%' height='250' mt='0px'>
          <iframe
            src='https://player.vimeo.com/video/521446927'
            width='470'
            frameBorder='0'
            title='Vimeo player'
          ></iframe>
        </Flex>
        <HStack
          mt={2}
          align='left'
          justify='flex-start'
          direction='row'
          width='100%'
          padding={0}
        >
          <Image
            boxSize='20px'
            borderRadius='full'
            src='https://bit.ly/sage-adebayo'
            alt='Segun Adebayo'
            pr={0}
            zIndex='1'
          />
          <Image
            boxSize='20px'
            borderRadius='full'
            src='https://bit.ly/sage-adebayo'
            alt='Segun Adebayo'
            pl={0}
            zIndex='2'
          />
          <Text opacity='0.5' fontSize='xs' pl='0.8rem'>
            Liked by 2 people
          </Text>
        </HStack>
        <Person
          width='100%'
          name='Kason Irving'
          image='https://global-uploads.webflow.com/5dc6336c6ade633733ef6e44/5f32a3bf55d09413ff81c8b0_avatar-kason.png'
          mb={0}
          fontSize='xs'
          opacity='0.7'
        />
        <Text
          bgGradient='linear(to-b, gray.600, gray.50)'
          bgClip='text'
          fontSize='xs'
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, labore
          deleniti! Enim, recusandae natus qui quaerat cumque quisquam ut itaque
          ipsum perspiciatis modi explicabo veritatis soluta, quia obcaecati
          quasi dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Expedita exercitationem cum repudiandae nihil quae voluptas,
          fugiat itaque dolore delectus eveniet vitae ipsam velit, ipsa eligendi
          quis error officiis officia esse!
        </Text>
      </VStack>
    </Flex>
  );
};

export default MainContent;
