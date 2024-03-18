import React, { useContext, useState } from 'react'
import { Box, Button, FormControl, FormErrorMessage, FormLabel, HStack, Input, InputGroup, InputRightElement, Text, useToast } from '@chakra-ui/react'
import { useFormik } from 'formik';
import { PinInput, PinInputField } from '@chakra-ui/react'
import * as Yup from 'yup'
import { RegistrationContext } from '../../Context/RegistrationContext.js';
const PassRecoverStep2 = () => {
    const { passwordRecoverStep, setPasswordRecoverStep } = useContext(RegistrationContext)

    const formik = useFormik({
        initialValues: {
            otp: "", // Ensure that the initial value is correctly set
        },
        validationSchema: Yup.object({
            otp: Yup.string().required('Please enter your OTP'), // Ensure that the schema matches the type of input expected
        }),
        onSubmit: (values, actions) => {
            if (!formik.errors.otp) {
                setPasswordRecoverStep(3)
                
            }
            actions.resetForm();
        },
    });

    return (
        <Box height='100%' display='flex' justifyContent='center' alignItems='center'>
            <Box width={{ base: '70%', md: '30%' }} height='300px' boxShadow='0px 0px 10px 0px #e5e5e5' rounded='md' bg='white' padding='35px' my='20px' borderRadius='10px'>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl isInvalid={formik.errors.otp && formik.touched.otp} p='2px' my='5px'>
                        <FormLabel>OTP</FormLabel>
                        <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
                            <HStack>
                                <PinInput name='otp' type='alphanumeric' >
                                    <PinInputField name='otp' onChange={formik.handleChange} value={formik.values.otp} />
                                    <PinInputField name='otp' onChange={formik.handleChange} value={formik.values.otp} />
                                    <PinInputField name='otp' onChange={formik.handleChange} value={formik.values.otp} />
                                    <PinInputField name='otp' onChange={formik.handleChange} value={formik.values.otp} />
                                </PinInput>
                            </HStack>
                        </Box>
                        <Box h='20px'>
                            <FormErrorMessage>{formik.errors.otp}</FormErrorMessage>
                        </Box>
                    </FormControl>

                    <Box display='flex' justifyContent='center' alignItems='center' width='100%' py='10px' my='15px'>
                        <Button type='submit' width='90%' height='45px' borderRadius='20px' colorScheme='linkedin'>Verify</Button>
                    </Box>
                </form>
            </Box>
        </Box>
    )
}

export default PassRecoverStep2
