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
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const SignIn = () => {
  let history = useHistory();
  const [show, setShow] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  const handleReClick = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validate = (values) => {
    const errors = {};

    if (values.email.length < 4) {
      errors.email = 'email must 5 characters or more';
    }

    if (values.password.length < 8) {
      errors.password = 'password must be 8 characters or more ';
    }
    if(values.password !== values.repassword){
      errors.password = errors.repassword = 'password must match'
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      repassword: ''
    },
    validate,
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, 2, null));
      actions.setSubmitting(false);
      history.push('/login')
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
        Create your circle community
      </Heading>
      <form onSubmit={formik.handleSubmit}>
        <FormControl
          id='fullName'
          isInvalid={formik.errors.fullName && formik.touched.fullName}
        >
          <FormLabel>Full Name</FormLabel>
          <Input
            type='text'
            onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            value={formik.values.fullName}
            isRequired
          />
          <FormErrorMessage>{formik.errors.fullName}</FormErrorMessage>
        </FormControl>
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
        <FormControl
          id='repassword'
          isInvalid={formik.errors.repassword && formik.touched.repassword}
        >
          <FormLabel>Confirm Password</FormLabel>
          <InputGroup size='md'>
            <Input
              pr='4.5rem'
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder='confirm password'
              onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              value={formik.values.repassword}
              isRequired
            />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleReClick}>
                {showConfirmPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{formik.errors.repassword}</FormErrorMessage>
        </FormControl>
        <Button my={3} colorScheme='blue' variant='outline' type='submit'>
          Login
        </Button>
      </form>
      <Text as='span' fontSize='small' color='gray.500'>
        Already have an account?
        <Link to='/login'>
          <Text as='span' color='blue.500'>
            {' '}
            Log in
          </Text>
        </Link>
      </Text>
    </Box>
  );
};

export default SignIn;
