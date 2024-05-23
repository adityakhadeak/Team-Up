import React, { useState } from 'react'
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import * as Yup from 'yup'
import { Card, CardBody, CardHeader, Icon } from '@chakra-ui/react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'



const ChangePassword = () => {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            currentpass: "",
            newpass: "",
            confirmpass: ""
        },
        validateOnBlur: false,
        validateOnChange: false,
        validationSchema: Yup.object({
            newpass: Yup.string().required('Password Required').min(8, 'Password should atleast contain 8 character').matches(/.*[!@#$%^&*()_+{}\[\]:;'"\\|<,>.?/].*/, 'Password should have at least one special character'),

            confirmpass: Yup.string().required("Confirm Password Required").oneOf([Yup.ref('newpass'), null], 'Passwords must match') // Ensure it matches the 'password' field
        }),
        onSubmit: (values, actions) => {
            if (!formik.errors.currentpass && !formik.errors.newpass && !formik.errors.confirmpass) {
              // Set registration step to 2 only if there are no errors
            } actions.resetForm()
          }
    })
    return (
        <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center' p='12px' gap='4'>

            <Box width='60%'  >
                <Card>
                    <CardHeader paddingBottom='5px'>
                        <Box onClick={() => { navigate(-1) }} cursor='pointer' display={'flex'} alignItems='center' gap={2} color={'#666666'}>
                            <Icon fontSize='12px' as={FaArrowLeftLong} />
                            <Text fontSize='12px'>Back</Text>
                        </Box>
                    </CardHeader>
                    <CardBody >
                        <Box>
                            <Text fontWeight={600} fontSize='md'>
                                Change password
                            </Text>
                            <Text fontSize='sm'>
                                Create a new password that is at least 8 characters long.
                            </Text>
                            <Box my='10px'>
                                <form onSubmit={formik.handleSubmit}>
                                    <Box  width='100%' gap={20} display='flex' justifyContent='start' alignItems='center' >
                                        <Box width='50%' gap='10' cursor='pointer' display='flex' flexDirection='column' alignItems='start'>
                                            <FormControl isInvalid={formik.errors.currentpass} >
                                                <FormLabel color='#666666' fontSize='sm'>Type your current password*</FormLabel>
                                                <Input height='33px' name='currentpass' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.currentpass} border='1px' borderColor='black' placeholder='Current password' py='10px' variant='outline' type='text' />
                                                <FormErrorMessage>{formik.errors.currentpass}</FormErrorMessage>
                                            </FormControl>
                                            <FormControl isInvalid={formik.errors.newpass} >
                                                <FormLabel color='#666666' fontSize='sm' >Type your new password*</FormLabel>
                                                <Input height='33px' name='newpass' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.newpass} border='1px' borderColor='black' placeholder='New password' py='10px' variant='outline'  type='text' />
                                                <FormErrorMessage>{formik.errors.newpass}</FormErrorMessage>
                                            </FormControl>
                                            <FormControl isInvalid={formik.errors.confirmpass} >
                                                <FormLabel color='#666666' fontSize='sm' >Retype your new password*</FormLabel>
                                                <Input height='33px' name='confirmpass' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmpass} border='1px' borderColor='black' placeholder='Retype password' py='10px' variant='outline' type='text' />
                                                <FormErrorMessage>{formik.errors.confirmpass}</FormErrorMessage>
                                            </FormControl>
                                        </Box>
                                    </Box>


                                </form>
                            </Box>
                            <Box mt={'20px'} pt='10px' >
                                <Button isDisabled='true' size='sm' colorScheme='blue' my='5px'>Save Password</Button>
                            </Box>
                            <Box mt={'20px'} pt='10px' >
                                <Button size='sm' colorScheme='blue' my='5px'>Forgot password</Button>
                            </Box>
                        </Box>
                    </CardBody>
                </Card>
            </Box>

        </Box>
    )
}

export default ChangePassword

