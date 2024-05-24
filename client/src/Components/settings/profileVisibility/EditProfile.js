import React, { useState } from 'react'
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Image, Input, InputGroup, InputRightElement, Text, Textarea } from '@chakra-ui/react'
import * as Yup from 'yup'
import { Card, CardBody, CardHeader, Icon } from '@chakra-ui/react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'



const EditProfile = () => {
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            headline: "",
            bio: "",
            profileimage: ""
        },
        validateOnBlur: false,
        validateOnChange: false,
        validationSchema: Yup.object({
            headline: Yup.string().required('Headline required').max(60, 'Headline must of of atmost 60 characters'),
            bio: Yup.string().required("Bio required")
        }),
        onSubmit: (values, actions) => {
            if (!formik.errors.headline && !formik.errors.bio && !formik.errors.profileimage) {
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
                            Edit profile
                            </Text>
                            
                            <Box my='10px'>
                                <form onSubmit={formik.handleSubmit}>
                                    <Box  width='100%' gap={20} display='flex' justifyContent='start' alignItems='center' >
                                        <Box width='50%' gap='10' cursor='pointer' display='flex' flexDirection='column' alignItems='start'>
                                            <FormControl isInvalid={formik.errors.profileimage} >
                                                <FormLabel color='#666666' fontSize='sm'>Profile Picture</FormLabel>
                                                <Image height={"200px"}  borderRadius={'50%'} src='https://media.licdn.com/dms/image/D4D03AQGjOVt4NPu7RA/profile-displayphoto-shrink_400_400/0/1713502700904?e=1721865600&v=beta&t=EUdo5fru634Nr2E0dNrqbMStLVR8ARzPdAHJZi6HRkI'/>
                                                <Input border='none' name='profileimage' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.profileimage}   py='10px'  type='file' />
                                                <FormErrorMessage>{formik.errors.profileimage}</FormErrorMessage>
                                            </FormControl>
                                            <FormControl isInvalid={formik.errors.bio} >
                                                <FormLabel color='#666666' fontSize='sm' >Bio</FormLabel>
                                                <Textarea height='33px' name='bio' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.bio} border='1px' borderColor='black' placeholder='Enter bio' py='10px' variant='outline'  type='text' />
                                                <FormErrorMessage>{formik.errors.bio}</FormErrorMessage>
                                            </FormControl>
                                            <FormControl isInvalid={formik.errors.confirmpass} >
                                                <FormLabel color='#666666' fontSize='sm' >Headline</FormLabel>
                                                <Textarea height='33px' name='headline' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.headline} border='1px' borderColor='black' placeholder='Enter headling' py='10px' variant='outline' type='text' />
                                                <FormErrorMessage>{formik.errors.headline}</FormErrorMessage>
                                            </FormControl>
                                        </Box>
                                    </Box>


                                </form>
                            </Box>
                           
                            <Box mt={'20px'} pt='10px' >
                                <Button size='sm' colorScheme='blue' my='5px'>Update </Button>
                            </Box>
                        </Box>
                    </CardBody>
                </Card>
            </Box>

        </Box>
    )
}

export default EditProfile

