import React, { useContext, useState } from 'react'
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement, Text, useToast } from '@chakra-ui/react'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { RegistrationContext } from '../../Context/RegistrationContext.js';
const PassRecoverStep3 = (props) => {
    const { passwordRecoverStep, setPasswordRecoverStep,handleResetPassword } = useContext(RegistrationContext)
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const formik = useFormik({
        initialValues: {
            password: "",
            confirmpass: ""
        },
        validateOnBlur: false,
        validateOnChange: true,
        validationSchema: Yup.object({
            password: Yup.string().required('Password Required').min(6, 'Password should contain at least 6 characters').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;'"\\|<,>.?/]).*$/,'Password should contain at least one uppercase letter, one lowercase letter, and one special character'),
          
            confirmpass: Yup.string().required("Confirm Password Required").oneOf([Yup.ref('password'), null], 'Passwords must match') // Ensure it matches the 'password' field

        }),
        onSubmit:async (values, actions) => {
            if (!formik.errors.email && !formik.errors.password && !formik.errors.confirmpass) {
                const goToNextStep= await handleResetPassword(props.email,formik.values.password)
            } actions.resetForm()
        }
    })

    const handlePasswordClick = () => setShowPassword(!showPassword);
    const handleConfirmPasswordClick = () => setShowConfirmPassword(!showConfirmPassword);
    return (
        <Box height='100%' display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box  width={{ base: '80%', md: '30%' }} height='410px' boxShadow='0px 0px 10px 0px #e5e5e5' rounded='md' bg='white' padding='35px' my='20px' borderRadius='10px'>
                <Text as='h1' fontSize={{base:'25px',md:'30px'}}>Recover Password</Text>
                <form onSubmit={formik.handleSubmit}>

                    <FormControl isInvalid={formik.errors.password && formik.touched.password} p='2px' my='5px'>
                        <FormLabel>New Password</FormLabel>
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
                
                    <Box display='flex' justifyContent={'center'} alignItems={'center'} width='100%' py='10px' my='15px'>

                        <Button type='submit' width='90%' height='45px' borderRadius='20px' colorScheme='linkedin' >Update Pasword</Button>
                    </Box>

                </form>



            </Box>
        </Box>
    )
}

export default PassRecoverStep3
