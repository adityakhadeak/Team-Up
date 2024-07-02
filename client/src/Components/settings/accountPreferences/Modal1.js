import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Select } from '@chakra-ui/react'
import { Box, Button, FormControl, FormLabel, Grid, GridItem, Input, Text, InputRightElement, InputGroup, FormErrorMessage, useConst } from '@chakra-ui/react'
import { Link, Link as ReactRouterLink } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import React, { useContext, useEffect } from 'react'
import { UserDataContext } from '../../../Context/UserDataContext'
import moment from 'moment'

const Modal1 = ({ open, setOpenModal1 }) => {

    const { loggedUserData, updateUserData, getLoggedInUserData ,setLoggedUserData} = useContext(UserDataContext)

    useEffect(() => {
        formik.setValues({
            firstname: loggedUserData.firstname || '',
            lastname: loggedUserData.lastname || '',
            gender: loggedUserData.gender || '',
            dob: loggedUserData.dob ? moment(loggedUserData.dob).format('YYYY-MM-DD') : '',
            location: loggedUserData.location || '',
            headline: loggedUserData.headline || '',
            about: loggedUserData.about || '',
        });
    }, [loggedUserData]);
    
    const formik = useFormik({
        initialValues: {
            firstname: loggedUserData.firstname,
            lastname: loggedUserData.lastname,
            gender: loggedUserData.gender,
            dob: moment(loggedUserData.dob).format('YYYY-MM-DD'),
            location: loggedUserData.location,
            headline: loggedUserData.headline,
            about: loggedUserData.about
        },
        validateOnBlur: false,
        validateOnChange: false,
        validationSchema: Yup.object({
            firstname: Yup.string().required("Username required").min(6, "Username must be atleast of 6 characters").matches('^[a-zA-Z0-9]+$', 'Username should not contain special characters'),
            lastname: Yup.string().required('Password Required')
        }),
        onSubmit: async (values, actions) => {
            await updateUserData(formik.values.firstname, formik.values.lastname, formik.values.gender, formik.values.dob, formik.values.location, formik.values.headline, formik.values.about)
           
        }
    })

    return (
        <>
            <Modal isOpen={open} onClose={() => { setOpenModal1(!open) }} >
                <ModalOverlay onClick={() => { setOpenModal1(!open) }} />
                <ModalContent maxWidth={'600px'}>
                    <form onSubmit={formik.handleSubmit}>

                        <ModalHeader>Profile information                  </ModalHeader>
                        <ModalCloseButton onClick={() => { setOpenModal1(!open) }} />
                        <ModalBody>

                            <Box px='20px' width='100%' gap={20} display='flex' justifyContent='start' alignItems='center' >
                                <Box width='50%' gap='10' cursor='pointer' display='flex' flexDirection='column' alignItems='start'>
                                    <FormControl isInvalid={formik.errors.username} >
                                        <FormLabel>First name</FormLabel>
                                        <Input name='firstname' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstname} border='1px' borderColor='black' placeholder='Enter Firstname' py='10px' variant='outline' type='text' />
                                        <FormErrorMessage>{formik.errors.firstname}</FormErrorMessage>
                                    </FormControl>


                                    <FormControl isInvalid={formik.errors.gender} >
                                        <FormLabel>Gender</FormLabel>
                                        <Select name='gender' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.gender} border='1px' borderColor='black' placeholder='Select option'>
                                            <option value='Male'>Male</option>
                                            <option value='Female'>Female</option>
                                            <option value='Other'>Other</option>
                                            <option value='Not saved'>Prefer not to say</option>
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



                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={() => { setOpenModal1(!open) }}>
                                Close
                            </Button>
                            <Button type='submit' variant='ghost'>Save</Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Modal1
