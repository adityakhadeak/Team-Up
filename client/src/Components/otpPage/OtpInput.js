import React, { useContext, useState } from 'react'
import { Box, Button, FormControl, FormErrorMessage, FormLabel, HStack, Input, InputGroup, InputRightElement, Text, useToast } from '@chakra-ui/react'
import { useFormik } from 'formik';
import { PinInput, PinInputField } from '@chakra-ui/react'
import * as Yup from 'yup'
import { FcGoogle } from 'react-icons/fc';
import { RegistrationContext } from '../../Context/RegistrationContext.js';
import { UserDataContext } from '../../Context/UserDataContext.js';
const OtpInputPage = (props) => {
    const { handleOTPVerify,handleOTPGenerate,setPasswordRecoverStep } = useContext(RegistrationContext)
    const { loggedUserData } = useContext(UserDataContext)

    const formik = useFormik({
        initialValues: {
            otp: "",
        },
        validationSchema: Yup.object({
            otp: Yup.string().required('Please enter your OTP'),
        }),
        onSubmit:async (values, actions) => {
            if (!formik.errors.otp) {
                console.log(loggedUserData.user_id)
                console.log(formik.values.otp)
               const goToNextStep= await handleOTPVerify(formik.values.otp, loggedUserData.user_id,props.type)
                // You may add additional logic here if needed
                console.log(goToNextStep)
                if(props.type==='other'){

                    setPasswordRecoverStep(goToNextStep?3:2)
                }
                

            }
            actions.resetForm();
        },
    });

    return (
        <Box height='100%' display='flex' justifyContent='center' alignItems='center'>
            <Box width={{ base: '70%', md: '30%' }} height='300px' boxShadow='0px 0px 10px 0px #e5e5e5' rounded='md' bg='white' padding='35px' my='20px' borderRadius='10px'>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl isInvalid={formik.errors.otp} p='2px' my='5px'>
                        <FormLabel textAlign={'center'}>OTP</FormLabel>
                        <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
                            <HStack>
                                <PinInput value={formik.values.otp} onChange={(value) => formik.setFieldValue('otp', value)}>
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField />
                                </PinInput>
                            </HStack>
                        </Box>
                        <Box  display='flex' justifyContent='center' h='20px'>
                            <FormErrorMessage>{formik.errors.otp}</FormErrorMessage>
                        </Box>
                    </FormControl>
                    <Box display='flex' justifyContent='end' alignItems='center' width='100%' py='2px' my='5px'>
                        <Text  onClick={()=>handleOTPGenerate(props.email,props.type)} fontSize={'15px'}>Re-send OTP</Text>
                    </Box>
                    <Box display='flex' justifyContent='center' alignItems='center' width='100%' py='10px' my='15px'>
                        <Button type='submit' width='90%' height='45px' borderRadius='20px' colorScheme='linkedin'>Verify</Button>
                    </Box>
                </form>
            </Box>
        </Box>
    )
}

export default OtpInputPage
