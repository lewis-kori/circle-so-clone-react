import React from 'react';
import { Flex, Text, VStack, Badge } from '@chakra-ui/react';

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

const LeftNav = () => {
  return (
    <Flex
      as='aside'
      align='left'
      justify='space-between'
      wrap='wrap'
      w='25%'
      mb={8}
      mt={5}
      height='69vh'
    >
      <VStack display='block' flexBasis='auto'>
        {/* welcome section */}
        <Flex align='left' justify='flex-start' direction='column' pt={0}>
          <MenuItem>
            <Text as='span' fontWeight='bold' fontSize='sm'>
              Welcome
            </Text>
          </MenuItem>
          <MenuItem>
            <Flex>
              🙏🏼
              <Text ml={2}>getting started</Text>
            </Flex>
          </MenuItem>
          <MenuItem>
            <Flex>
              👋🏼
              <Text ml={2}>Introductions</Text>
              <Badge ml={105}>7</Badge>
            </Flex>
          </MenuItem>

          {/* theory section */}
          <MenuItem mt={6}>
            <Text as='span' fontWeight='bold' fontSize='sm'>
              Theory
            </Text>
          </MenuItem>
          <MenuItem>
            <Flex>
              🎯
              <Text ml={2}>Basics</Text>
            </Flex>
          </MenuItem>
          <MenuItem>
            <Flex>
              💬
              <Text ml={2}>Conversations</Text>
              <Badge ml={100}>3</Badge>
            </Flex>
          </MenuItem>
          <MenuItem>
            <Flex>
              🎧
              <Text ml={2}>weekly q&a</Text>
              <Badge ml={118}>1</Badge>
            </Flex>
          </MenuItem>

          {/* practice section */}
          <MenuItem mt={6}>
            <Text as='span' fontWeight='bold' fontSize='sm'>
              Practice
              <Badge ml={2} colorScheme='purple'>
                pro
              </Badge>
            </Text>
          </MenuItem>
          <MenuItem>
            <Flex>
              🔒
              <Text ml={2}>Live sessions</Text>
            </Flex>
          </MenuItem>
          <MenuItem>
            <Flex>
              🔒
              <Text ml={2}>Upcoming events</Text>
            </Flex>
          </MenuItem>
          <MenuItem>
            <Flex>
              🔒
              <Text ml={2}>Challenges</Text>
              <Badge ml={120}>1</Badge>
            </Flex>
          </MenuItem>
          {/* end practice */}

          {/* meditation groups */}

          <MenuItem mt={6}>
            <Text as='span' fontWeight='bold' fontSize='sm'>
              Meditation Groups
            </Text>
          </MenuItem>
          <MenuItem>
            <Flex>
              🍃
              <Text ml={2}>Zen club</Text>
            </Flex>
          </MenuItem>
          <MenuItem>
            <Flex>
              🗻
              <Text ml={2}>Koan way</Text>
            </Flex>
          </MenuItem>
          <MenuItem>
            <Flex>
              🌻
              <Text ml={2}>Metta Kindness</Text>
              <Badge ml={90}>15</Badge>
            </Flex>
          </MenuItem>
          {/* end meditation groups */}
        </Flex>
      </VStack>
    </Flex>
  );
};

export default LeftNav;
