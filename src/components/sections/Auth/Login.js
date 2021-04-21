import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AuthStore from '../../../store/AuthStore';
const Login = () => {
  const store = new AuthStore();
  let history = useHistory();
  const toast = useToast();
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const validate = (values) => {
    const errors = {};

    if (values.email.length < 4) {
      errors.email = 'email must 5 characters or more';
    }

    if (values.password.length < 8) {
      errors.password = 'password must be 8 characters or more ';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values, actions) => {
      store.login(values);
      if (store.isAuthenticated) {
        history.push('/');
        toast({
          title: `Welcome back to cirlcle ${store.loggedInUser.email}`,
          position: 'top-right',
          status: 'success',
          isClosable: true,
        });
      } else {
        toast({
          title: 'Please provide the correct credentials',
          position: 'top-right',
          status: 'error',
          isClosable: true,
        });
      }
      actions.setSubmitting(false);
    },
  });
  return (
    <Box as='div' maxW='40rem' my={150} align='center'>
      <Image
        src='https://login.circle.so/assets/favicon-0cc2c9a96f7ef8c342681bbf961948df9d91749720c8615ff5f35e1d8ef55671.svg'
        borderRadius='full'
        boxSize='5.5rem'
        fallbackSrc='https://via.placeholder.com/150'
        mb={4}
      />
      <Heading as='h2' fontSize='xl' fontWeight='light' mb={3}>
        Log in to your Circle account
      </Heading>
      <form onSubmit={formik.handleSubmit}>
        <FormControl
          id='email'
          isInvalid={formik.errors.email && formik.touched.email}
        >
          <FormLabel>Email</FormLabel>
          <Input
            type='email'
            onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            value={formik.values.email}
            isRequired
          />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>
        <FormControl
          id='password'
          isInvalid={formik.errors.password && formik.touched.password}
        >
          <FormLabel>Password</FormLabel>
          <InputGroup size='md'>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
              onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              value={formik.values.password}
              isRequired
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
        </FormControl>
        <Button my={3} colorScheme='blue' variant='outline' type='submit'>
          Login
        </Button>
      </form>
      <Text as='span' fontSize='small' color='gray.500'>
        Don't have an account?
        <Link to='/signup'>
          <Text as='span' color='blue.500'>
            {' '}
            Sign up
          </Text>
        </Link>
      </Text>
    </Box>
  );
};

export default observer(Login);
