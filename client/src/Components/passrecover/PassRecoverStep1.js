import React, { useContext, useState } from 'react'
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement, Text, useToast } from '@chakra-ui/react'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { RegistrationContext } from '../../Context/RegistrationContext.js';
const PassRecoverStep1 = () => {
    const { passwordRecoverStep, setPasswordRecoverStep } = useContext(RegistrationContext)


    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validateOnBlur: false,
        validateOnChange: true,
        validationSchema: Yup.object({
            email: Yup.string().required("Email Required").email('Invalid Email Id'),

        }),
        onSubmit: (values, actions) => {
            if (!formik.errors.email) {
                setPasswordRecoverStep(2);
            } actions.resetForm()
        }
    })

    return (
        <Box height='100%' display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box width={{ base: '80%', md: '30%' }} height='350px' boxShadow='0px 0px 10px 0px #e5e5e5' rounded='md' bg='white' padding='35px' my='20px' borderRadius='10px'>
                <Text as='h1' fontSize={{base:'25px',md:'30px'}}>Recover Password</Text>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl isInvalid={formik.errors.email && formik.touched.email} p='2px' my='5px'>
                        <FormLabel>Email</FormLabel>
                        <Input name='email' value={formik.values.email} onChange={formik.handleChange} border='1px' borderColor='black' placeholder='Enter Email' py='25px' variant='outline' type='text' />
                        <Box h={'20px'}>
                            <FormErrorMessage >{formik.errors.email}</FormErrorMessage>
                        </Box>
                    </FormControl>



                    <Box display='flex' justifyContent={'center'} alignItems={'center'} width='100%' py='10px' my='15px'>
                        <Button type='submit' width='90%' height='45px' borderRadius='20px' colorScheme='linkedin' >Continue</Button>
                    </Box>

                </form>

            </Box>
        </Box>
    )
}

export default PassRecoverStep1
