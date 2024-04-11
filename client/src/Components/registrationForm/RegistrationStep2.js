import React, { useContext, useEffect, useState } from 'react'
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement, Text, useToast } from '@chakra-ui/react'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { FcGoogle } from 'react-icons/fc';
import { RegistrationContext } from '../../Context/RegistrationContext.js';
import { UserDataContext } from '../../Context/UserDataContext.js';
const RegistrationStep2 = () => {
  const { setRegistrationStep, setSuccess, registrationStep, setUserRegistrationInfo, userRegistrationInfo, success, handleRegistration, handleOTPGenerate } = useContext(RegistrationContext)
  const { loggedUserData } = useContext(UserDataContext)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const submitRegistration = async () => {
      if (isSubmitting) {
        try {
          const goToNextStep = await handleRegistration();
          setRegistrationStep(goToNextStep ? 3 : 1);
          if (goToNextStep)
            handleOTPGenerate(userRegistrationInfo.email,'verification')

          setUserRegistrationInfo({ username: '', password: '', email: '', firstname: '', lastname: '' });
          setIsSubmitting(false); // Reset submitting state after handleRegistration is completed
        } catch (error) {
          // Handle error
          setIsSubmitting(false); // Reset submitting state on error
        }
      }
    };
    submitRegistration();
  }, [isSubmitting, handleRegistration, setRegistrationStep, setUserRegistrationInfo]);

  // useEffect(() => {
  //   if (success != undefined) {
  //     setRegistrationStep(success ? 3 : 1);
  //     if (success)
  //       handleOTPGenerate(loggedUserData.email)
  //       setSuccess()
  //   }
  // }, [success])

  const formik = useFormik({
    initialValues: {
      username: "",
      lastname: "",
      firstname: ""
    },
    validateOnBlur: false,
    validateOnChange: true,
    validationSchema: Yup.object({
      username: Yup.string().required("Username required").min(6, "Username must be atleast of 6 characters").matches('^[a-zA-Z0-9]+$', 'Username should not contain special characters'),
      firstname: Yup.string().required('Please enter your firstname').min(2, "Name atleast of 2 length"),
      lastname: Yup.string().required('Please enter your lastname')
    }),
    onSubmit: (values, actions) => {
      if (!formik.errors.username && !formik.errors.firstname && !formik.errors.lastname) {
        setUserRegistrationInfo({ ...userRegistrationInfo, username: formik.values.username, firstname: formik.values.firstname, lastname: formik.values.lastname })
        setIsSubmitting(true)
      } actions.resetForm()
    }
  })

  return (
    <Box height='100%' display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Box width={{ base: '80%', md: '50%' }} height='550px' boxShadow='0px 0px 10px 0px #e5e5e5' rounded='md' bg='white' padding='35px' my='20px' borderRadius='10px'>
        <form onSubmit={formik.handleSubmit}>
          <FormControl isInvalid={formik.errors.username && formik.touched.username} p='2px' my='5px'>
            <FormLabel>Username</FormLabel>
            <Input name='username' value={formik.values.username} onChange={formik.handleChange} border='1px' borderColor='black' placeholder='Enter Email' py='25px' variant='outline' type='text' />
            <Box h={'20px'}>
              <FormErrorMessage >{formik.errors.username}</FormErrorMessage>
            </Box>
          </FormControl>

          <FormControl isInvalid={formik.errors.firstname && formik.touched.firstname} p='2px' my='5px'>
            <FormLabel>First Name</FormLabel>
            <Input
              name='firstname' value={formik.values.firstname} onChange={formik.handleChange}
              border='1px' borderColor='black'
              py='25px'
              pr='4.5rem'
              type='text'
              placeholder='Enter password'
            />

            <Box h={'20px'}>

              <FormErrorMessage >{formik.errors.firstname}</FormErrorMessage>
            </Box>
          </FormControl>
          <FormControl isInvalid={formik.errors.lastname && formik.touched.lastname} p='2px' my='5px'>
            <FormLabel>Last Name</FormLabel>
            <Input
              name='lastname' value={formik.values.lastname} onChange={formik.handleChange}
              border='1px' borderColor='black'
              py='25px'
              pr='4.5rem'
              type='text'
              placeholder='Enter password'
            />

            <Box h={'20px'}>

              <FormErrorMessage >{formik.errors.lastname}</FormErrorMessage>
            </Box>
          </FormControl>

          <Box display='flex' justifyContent={'center'} alignItems={'center'} width='100%' py='10px' my='15px'>

            <Button type='submit' width='90%' height='45px' borderRadius='20px' colorScheme='linkedin'>Sign up</Button>
          </Box>

        </form>
      </Box>
    </Box>
  )
}

export default RegistrationStep2
