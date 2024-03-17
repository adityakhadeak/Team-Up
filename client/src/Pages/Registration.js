import { Box, Button, FormControl, FormLabel, Grid, GridItem, Input, Text, InputRightElement, InputGroup, FormErrorMessage } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { Link as ReactRouterLink } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import { useFormik } from 'formik';
import * as Yup from 'yup'
const Registration = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmpass: ""
    },
    validateOnBlur: false,
    validateOnChange: true,
    validationSchema: Yup.object({
      email: Yup.string().required("Email Required").email('Invalid Email Id'),
      // username: Yup.string().required("Username required").min(6, "Username must be atleast of 6 characters").matches('^[a-zA-Z0-9]+$', 'Username should not contain special characters'),
      password: Yup.string().required('Password Required').min(6, 'Password should atleast contain 6 character').matches(/.*[!@#$%^&*()_+{}\[\]:;'"\\|<,>.?/].*/, 'Password should have at least one special character'),

      confirmpass: Yup.string().required("Confirm Password Required").oneOf([Yup.ref('password'), null], 'Passwords must match') // Ensure it matches the 'password' field

    }),
    onSubmit: (values, actions) => {
      actions.resetForm()
    }
  })

  const handlePasswordClick = () => setShowPassword(!showPassword);
  const handleConfirmPasswordClick = () => setShowConfirmPassword(!showConfirmPassword);
  const toast = useToast()
  return (
    <Grid fontFamily={'Raleway'} height={'100%'} templateRows={'auto'} templateColumns={{ base: '1fr', md: '1fr 2fr' }} >
      <GridItem backgroundColor='#0a66c2' display={{ base: "none", md: 'block' }}>
        <Box height='100%' display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='20px'>
          <Box my='10px' p='10px' >
            <Text fontWeight='900' color='white' fontSize='35px'>Already Have Account?</Text>
          </Box>
          <Box width='90%' my='10px' p='10px' >
            <Text textAlign='center' color='white' fontSize='15px'>Access your account to explore thrilling projects and discover ways to contribute your talents and knowledge</Text>
          </Box>
          <Box display='flex' justifyContent={'center'} alignItems={'center'} width='100%' py='10px' my='20px'>
            <Button width='70%' height='45px' borderRadius='20px' colorScheme='gray' as={ReactRouterLink} to='/login'>Sign in</Button>
          </Box>
        </Box>
      </GridItem>
      <GridItem >
        <Box height='100%' display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box width={{ base: '80%', md: '50%' }} height='690px' boxShadow='0px 0px 10px 0px #e5e5e5' rounded='md' bg='white' padding='35px' my='20px' borderRadius='10px'>
            <Text as='h1' fontSize='30px'>Sign up</Text>
            <form onSubmit={formik.handleSubmit}>
              <FormControl isInvalid={formik.errors.email && formik.touched.email} p='2px' my='5px'>
                <FormLabel>Email</FormLabel>
                <Input name='email' value={formik.values.email} onChange={formik.handleChange} border='1px' borderColor='black' placeholder='Enter Email' py='25px' variant='outline' type='text' />
                <Box h={'20px'}>
                  <FormErrorMessage >{formik.errors.email}</FormErrorMessage>
                </Box>
              </FormControl>

              <FormControl isInvalid={formik.errors.password && formik.touched.password} p='2px' my='5px'>
                <FormLabel>Password</FormLabel>
                <InputGroup size='md'>
                  <Input
                    name='password' value={formik.values.password} onChange={formik.handleChange}
                    border='1px' borderColor='black'
                    py='25px'
                    pr='4.5rem'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Enter password'
                  />
                  <InputRightElement my='5px' width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handlePasswordClick}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Box h={'20px'}>

                  <FormErrorMessage >{formik.errors.password}</FormErrorMessage>
                </Box>
              </FormControl>
              <FormControl isInvalid={formik.errors.confirmpass && formik.touched.confirmpass} p='2px' my='5px'>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup size='md'>
                  <Input
                    name='confirmpass'
                    value={formik.values.confirmpass} onChange={formik.handleChange}
                    border='1px' borderColor='black'
                    py='25px'
                    pr='4.5rem'
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder='Enter Confirm password'
                  />
                  <InputRightElement my='5px' width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleConfirmPasswordClick}>
                      {showConfirmPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Box h={'20px'}>
                  <FormErrorMessage >{formik.errors.confirmpass}</FormErrorMessage>
                </Box>
              </FormControl>
              <Box my='5px'>
                <Text textAlign='center' fontSize='11px'>By clicking Continue, you agree to LinkedIn’s <Box as='a' color='#0a66c2' fontWeight='500' href='#'>User Agreement</Box>, <Box as='a' color='#0a66c2' fontWeight='500' href='#'>Privacy Policy</Box>, and <Box color='#0a66c2' as='a' fontWeight='500' href='#'>Cookie Policy</Box>.</Text>
              </Box>
              <Box display='flex' justifyContent={'center'} alignItems={'center'} width='100%' py='10px' my='15px'>

                <Button type='submit' width='90%' height='45px' borderRadius='20px' colorScheme='linkedin' onClick={() =>
                  toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })}>Sign up</Button>
              </Box>

            </form>
            <Box position={'relative'} _before={{ content: '" "', backgroundColor: '#b1afaf', display: 'flex', position: 'absolute', left: '2px', top: '13px', width: '40%', height: '0.5px' }} _after={{ content: '" "', backgroundColor: '#b1afaf', position: 'absolute', bottom: '10px', display: 'flex', right: '1px', width: '40%', height: '0.5px' }}>
              <Text as='p' textAlign={'center'}>or</Text>
            </Box>

            <Box display='flex' justifyContent={'center'} alignItems={'center'} width='100%' py='10px' my='15px'>
              <Button width={{ base: '100%', md: '90%' }} height='45px' borderRadius='20px' ><Box as='span' mx='8px'><FcGoogle fontSize='20px' /></Box> Continue with Google</Button>
            </Box>
          </Box>
        </Box>
      </GridItem>


    </Grid>
  )
}

export default Registration
