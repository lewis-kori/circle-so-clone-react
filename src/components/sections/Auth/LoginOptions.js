import { Box, Image, Button, Stack, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter } from 'react-icons/fa';

const LoginBtn = ({ url, text, ...rest }) => {
  return (
    <Link to={url}>
      <Button {...rest} my={3} isFullWidth>
        {text}
      </Button>
    </Link>
  );
};

const LoginOptions = () => {
  return (
    <Box as='div' maxW='40rem' my={150} align='center'>
      <Image
        src='https://login.circle.so/assets/favicon-0cc2c9a96f7ef8c342681bbf961948df9d91749720c8615ff5f35e1d8ef55671.svg'
        borderRadius='full'
        boxSize='5.5rem'
        fallbackSrc='https://via.placeholder.com/150'
        mb={4}
      />
      <Heading as='h2' fontSize='xl' fontWeight='light'>Log in to your Circle account</Heading>
      <Stack direction='column'>
        <LoginBtn
          url='/login'
          text='sign in with an email'
          bg='blue.600'
          color='white'
        />
        <LoginBtn
          url='/facebook'
          text='Continue with twitter'
          variant='outline'
          colorScheme='twitter'
          leftIcon={<FaTwitter />}
        />
        <LoginBtn
          url='/facebook'
          text='Continue with facebook'
          variant='outline'
          colorScheme='facebook'
          leftIcon={<FaFacebook />}
        />
      </Stack>
    </Box>
  );
};

export default LoginOptions;
