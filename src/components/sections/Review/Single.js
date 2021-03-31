import { Flex, Text, Image } from '@chakra-ui/react';
const Single = ({ text, logo, ...rest} ) => {
  return (
    <Flex direction='column' align='center' textAlign='center' {...rest}>
      <Text opacity='0.5' w='70%' fontSize='xl' mb={5}>
        "{text}"
      </Text>
      {logo && <Image src={logo} w={['60%', '40%']} />}
    </Flex>
  );
};

export default Single;
