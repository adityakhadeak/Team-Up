import { Box, Button, FormControl, FormLabel, Grid, GridItem, Input, Text, InputRightElement, InputGroup, FormErrorMessage, useConst } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { Link, Link as ReactRouterLink, useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import { AuthContext } from '../Context/AuthContext';
import { UserDataContext } from '../Context/UserDataContext';
const Login = () => {
  const {handleLogin}=useContext(AuthContext)
  const { setIsLoggedIn,isLoggedIn,setLoggedUserDatam,loggedUserData}=useContext(UserDataContext)

  useEffect(() => {
    if(isLoggedIn){
      navigate('/explore')
    }
  }, [isLoggedIn])
  
  
  const navigate=useNavigate()
  const formik=useFormik({
    initialValues:{
      username:"",
      password:""
    },
    validateOnBlur:false,
    validateOnChange:false,
    validationSchema:Yup.object({
      username:Yup.string().required("Username required").min(6,"Username must be atleast of 6 characters").matches('^[a-zA-Z0-9]+$','Username should not contain special characters'),
      password:Yup.string().required('Password Required')
    }),
    onSubmit: async(values,actions)=>{
      if(!formik.errors.password && !formik.errors.username)
      {
        const goToNextStep= await handleLogin(formik.values.username,formik.values.password)
        if(goToNextStep)
          {
            navigate('/explore')
            setIsLoggedIn(true)
            localStorage.setItem('teamup-login',true)
          
          }
      }
      actions.resetForm()
    }
  })

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const toast = useToast()
  return (
    <Grid fontFamily={'Raleway'} height={'100%'} templateRows={'auto'} templateColumns={{ base: '1fr', md: '2fr 1fr' }} >
      <GridItem >
        <Box height='100%' display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box width={{ base: '80%', md: '50%' }} height='600px' boxShadow='0px 0px 10px 0px #e5e5e5' rounded='md' bg='white' padding='35px' my='20px' borderRadius='10px'>
            <Text as='h1' fontSize='30px'>Sign in</Text>
            <form onSubmit={formik.handleSubmit}>
              <FormControl isInvalid={formik.errors.username} p='2px' my='5px'>
                <FormLabel>Username</FormLabel>
                <Input name='username' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username} border='1px' borderColor='black' placeholder='Enter Username' py='25px' variant='outline' type='text' />
                <FormErrorMessage>{formik.errors.username}</FormErrorMessage>

              </FormControl>
              <FormControl isInvalid={formik.errors.password} p='2px' my='5px'>
                <FormLabel>Password</FormLabel>
                <InputGroup size='md'>
                  <Input
                  name='password'
                  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} 
                    border='1px' borderColor='black'
                    py='25px'
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                  />
                  <InputRightElement my='5px' width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>

              </FormControl>
              <Link style={{color:'#0a66c2'}} to="/recoverpassword" fontWeight='500'>Forgot password?</Link>
              <Box display='flex' justifyContent={'center'} alignItems={'center'} width='100%' py='10px' my='20px'>
                <Button width='90%' height='45px' borderRadius='20px' colorScheme='linkedin' type='submit'>Sign in</Button>
              </Box>

            </form>
            <Box position={'relative'} _before={{ content: '" "', backgroundColor: '#b1afaf', display: 'flex', position: 'absolute', left: '2px', top: '13px', width: '40%', height: '0.5px' }} _after={{ content: '" "', backgroundColor: '#b1afaf', position: 'absolute', bottom: '10px', display: 'flex', right: '1px', width: '40%', height: '0.5px' }}>
              <Text as='p' textAlign={'center'}>or</Text>
            </Box>
            <Box>
              <Text fontSize='11px'>By clicking Continue, you agree to LinkedIn’s <Box as='a' color='#0a66c2' fontWeight='500' href='#'>User Agreement</Box>, <Box as='a' color='#0a66c2' fontWeight='500' href='#'>Privacy Policy</Box>, and <Box color='#0a66c2' as='a' fontWeight='500' href='#'>Cookie Policy</Box>.</Text>
            </Box>
            <Box display='flex' justifyContent={'center'} alignItems={'center'} width='100%' py='10px' my='20px'>
              <Button width={{ base: '100%', md: '90%' }} height='45px' borderRadius='20px' ><Box as='span' mx='8px'><FcGoogle fontSize='20px' /></Box> Continue with Google</Button>
            </Box>
          </Box>
        </Box>
      </GridItem>

      <GridItem backgroundColor='#00a0dc' display={{ base: "none", md: 'block' }}>
        <Box height='100%' display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='20px'>
          <Box my='10px' p='10px' >
            <Text fontWeight='900' color='white' fontSize='35px'>New Here?</Text>
          </Box>
          <Box width='90%' my='10px' p='10px' >
            <Text textAlign='center' color='white' fontSize='15px'>Sign up and discover exciting projects and find opportunities to contribute your skills and expertise.</Text>
          </Box>
          <Box display='flex' justifyContent={'center'} alignItems={'center'} width='100%' py='10px' my='20px'>
            <Button width='70%' height='45px' borderRadius='20px' colorScheme='gray' as={ReactRouterLink} to='/register'>Sign up</Button>
          </Box>
        </Box>
      </GridItem>
    </Grid>
  )
}

export default Login
