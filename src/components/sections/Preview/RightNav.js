import React from 'react';
import { Flex, Text, VStack, SkeletonText } from '@chakra-ui/react';
import Person from './Person';

const MenuItem = (props) => {
  const { children, isLast, ...rest } = props;
  return (
    <Text
      mt={3}
      ml={{ base: 0, sm: isLast ? 0 : 8 }}
      display='block'
      fontWeight='light'
      fontSize='small'
      {...rest}
    >
      {children}
    </Text>
  );
};

const RightNav = () => {
  return (
    <Flex
      as='aside'
      align='left'
      justify='space-between'
      wrap='wrap'
      w='25%'
      mb={8}
      height='68vh'
    >
      <VStack display='block' flexBasis='auto'>
        {/* welcome section */}
        <Flex align='left' justify='flex-start' direction='column' pt={0}>
          <MenuItem boxShadow='sm' bg='white' mt={7}>
            <Text as='span' fontWeight='bold' fontSize='sm' ml={4} mb={5}>
              Members
            </Text>
            <Person
              name='wole soyinka'
              image='https://global-uploads.webflow.com/5dc6336c6ade633733ef6e44/5f32a6c586a545a8a671777c_avatar-nicole.png'
            />
            <Person
              name='teddy ngeene'
              image='https://global-uploads.webflow.com/5dc6336c6ade633733ef6e44/5f32a6c53947bf7d27758729_avatar-pierre.png'
            />
            <Person />
          </MenuItem>
          <MenuItem boxShadow='sm' bg='white' mt={7}>
            <Text as='span' fontWeight='bold' fontSize='sm' ml={4} mb={5}>
              Moderator
            </Text>
            <Person name='lewis kori' />
          </MenuItem>
          <MenuItem boxShadow='sm' bg='white' mt={7} h='6rem'>
            <Text as='span' fontWeight='bold' fontSize='sm' ml={4} mb={10}>
              Pinned Topics
            </Text>
            <Flex wrap='wrap' pl={4} pt={2}>
              <SkeletonText
                mt={0}
                ml={4}
                mr={10}
                w='100%'
                spacing='4'
                noOfLines={3}
                height='20px'
                startColor='gray.200'
                endColor='gray.200'
              />
            </Flex>
          </MenuItem>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default RightNav;
