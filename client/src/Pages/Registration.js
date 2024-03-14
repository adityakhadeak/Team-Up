import React, { useState } from 'react';

import { Form, Route } from 'react-router-dom';
import { Box, Button, Input } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,

} from '@chakra-ui/react'


const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement MongoDB data insertion logic here
    console.log('Form submitted:', formData);
    // You can send the form data to your MongoDB database from here
  };

  return (
    <>
      <Box maxW='600px' p='12px' w='100%' h='500px' border='2px solid grey'>
        <Form>
          <p>Already have an account?Login </p>
          <FormControl>
            <FormLabel>UserName</FormLabel>
            <Input variant='filled' name='Username' />
            <FormLabel>Email</FormLabel>
            <Input variant='filled' type='email' name='email' />
            <FormLabel>Password</FormLabel>
            <Input variant='filled' type='password' name='password' />
            <FormLabel>confirm Password</FormLabel>
            <Input variant='filled' type='password' name='confirmpassword' />
            <Button mt={4} p={4}
              color='white' fontWeight='bold' borderRadius='md' bgGradient='linear(to-r, teal.500, green.500)'
              _hover={{
                bgGradient: 'linear(to-r, red.500, yellow.500)',
              }} type='submit' > register </Button>
          </FormControl>
        </Form>
       
          <Box boxSize='sm'>
            <Image src='./signup.png' alt='Dan Abramov' />
          </Box>
       </Box>

      </>
      );
};

      export default Registration;
