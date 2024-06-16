import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Select } from '@chakra-ui/react'
import { Box, Button, FormControl, FormLabel, Grid, GridItem, Input, Text, InputRightElement, InputGroup, FormErrorMessage, useConst } from '@chakra-ui/react'
import { Link, Link as ReactRouterLink } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import React from 'react'

const Modal1 = ({ open, setOpenModal1 }) => {
    const formik = useFormik({
        initialValues: {
            firstname: "",
            lastname: "",
            gender: "",
            dob: '',
            location: '',
            headline: '',
            about:''
        },
        validateOnBlur: false,
        validateOnChange: false,
        validationSchema: Yup.object({
            firstname: Yup.string().required("Username required").min(6, "Username must be atleast of 6 characters").matches('^[a-zA-Z0-9]+$', 'Username should not contain special characters'),
            lastname: Yup.string().required('Password Required')
        }),
        onSubmit: (values, actions) => {
            if (!formik.errors.password && !formik.errors.username) {
                // const goToNextStep = handleLogin(formik.values.username, formik.values.password)

            }
            actions.resetForm()
        }
    })
    return (
        <>
            <Modal isOpen={open} onClose={() => { setOpenModal1(!open) }} >
                <ModalOverlay onClick={() => { setOpenModal1(!open) }} />
                <ModalContent maxWidth={'600px'}>
                    <ModalHeader>Profile information                  </ModalHeader>
                    <ModalCloseButton onClick={() => { setOpenModal1(!open) }} />
                    <ModalBody>
                        <form onSubmit={formik.handleSubmit}>

                            <Box px='20px' width='100%' gap={20} display='flex' justifyContent='start' alignItems='center' >
                                <Box width='50%' gap='10' cursor='pointer' display='flex' flexDirection='column' alignItems='start'>
                                    <FormControl isInvalid={formik.errors.username} >
                                        <FormLabel>First name</FormLabel>
                                        <Input name='firstname' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstname} border='1px' borderColor='black' placeholder='Enter Firstname' py='10px' variant='outline' type='text' />
                                        <FormErrorMessage>{formik.errors.firstname}</FormErrorMessage>
                                    </FormControl>


                                    <FormControl isInvalid={formik.errors.gender} >
                                        <FormLabel>Gender</FormLabel>
                                        <Select border='1px' borderColor='black' placeholder='Select option'>
                                            <option value='option1'>Male</option>
                                            <option value='option2'>Female</option>
                                            <option value='option3'>Other</option>
                                            <option value='option3'>Prefer not to say</option>
                                        </Select>
                                        <FormErrorMessage>{formik.errors.gender}</FormErrorMessage>

                                    </FormControl>


                                    <FormControl isInvalid={formik.errors.location} >
                                        <FormLabel>Location</FormLabel>
                                        <Input name='location' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.location} border='1px' borderColor='black' placeholder='Enter Location' py='10px' variant='outline' type='text' />
                                        <FormErrorMessage>{formik.errors.location}</FormErrorMessage>

                                    </FormControl>
                                    <FormControl isInvalid={formik.errors.about} >
                                        <FormLabel>About</FormLabel>
                                        <Input name='about' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.about} border='1px' borderColor='black' placeholder='Enter About' py='10px' variant='outline' type='text' />
                                        <FormErrorMessage>{formik.errors.about}</FormErrorMessage>

                                    </FormControl>
                                </Box>
                                <Box width='50%' gap='10' display='flex' flexDirection='column' justifyContent='space-between' alignItems='start'>
                                    <FormControl isInvalid={formik.errors.lastname} >
                                        <FormLabel>Last name</FormLabel>
                                        <Input name='lastname' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastname} border='1px' borderColor='black' placeholder='Enter Lastname' py='10px' variant='outline' type='text' />
                                        <FormErrorMessage>{formik.errors.lastname}</FormErrorMessage>
                                    </FormControl>

                                    <FormControl isInvalid={formik.errors.dob} >
                                        <FormLabel>DOB</FormLabel>
                                        <Input name='dob' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.dob} border='1px' borderColor='black' placeholder='Enter DOB' py='10px' variant='outline' type='date' />
                                        <FormErrorMessage>{formik.errors.dob}</FormErrorMessage>

                                    </FormControl>

                                    <FormControl isInvalid={formik.errors.headline} >
                                        <FormLabel>Headline</FormLabel>
                                        <Input name='headline' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.headline} border='1px' borderColor='black' placeholder='Enter Headline' py='10px' variant='outline' type='text' />
                                        <FormErrorMessage>{formik.errors.headline}</FormErrorMessage>

                                    </FormControl>

                                </Box>

                            </Box>


                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => { setOpenModal1(!open) }}>
                            Close
                        </Button>
                        <Button variant='ghost'>Save</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Modal1
