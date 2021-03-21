import React from 'react';
import { Flex, Text, Box, Image } from '@chakra-ui/react';
import { FaChartArea, FaRocketchat, FaBell } from 'react-icons/fa';

const MenuItem = (props) => {
  const { children, isLast, ...rest } = props;
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display='block'
      {...rest}
    >
      {children}
    </Text>
  );
};

const Header = () => {
  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      w='90%'
      h='2rem'
      mb={0}
      border='1px'
      borderColor='gray.200'
      borderTopRightRadius="md"
      borderTopLeftRadius="md"
    >
      <Flex align='center'>
        <Text fontSize='s' fontWeight='semibold' w='100' ml={8}>
          ModernMind
        </Text>
      </Flex>

      <Box display='block' flexBasis='auto' mr={10}>
        <Flex align='center' justify='flex-end' direction='row' pt={0}>
          <MenuItem>
            <FaChartArea />
          </MenuItem>
          <MenuItem>
            <FaRocketchat />
          </MenuItem>
          <MenuItem>
            <FaBell />
          </MenuItem>
          <MenuItem isLast>
            <Image
              boxSize='20px'
              borderRadius='full'
              src='https://bit.ly/sage-adebayo'
              alt='Segun Adebayo'
            />
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
