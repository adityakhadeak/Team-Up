import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Select } from '@chakra-ui/react'
import { Box, Button, FormControl, FormLabel, Grid, GridItem, Input, Text, InputRightElement, InputGroup, FormErrorMessage, useConst } from '@chakra-ui/react'
import { Link, Link as ReactRouterLink } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import React from 'react'

const Modal2 = ({ open, setOpenModal1 }) => {
    const formik = useFormik({
        initialValues: {
            skill: ''
        },
        validateOnBlur: false,
        validateOnChange: false,
        validationSchema: Yup.object({
            skill: Yup.string().required("Skill required").matches('^[a-zA-Z0-9]+$', 'Username should not contain special characters'),
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
                <ModalContent >
                    <ModalHeader>Add Skill</ModalHeader>
                    <ModalCloseButton onClick={() => { setOpenModal1(!open) }} />
                    <ModalBody>
                        <form onSubmit={formik.handleSubmit}>

                            <Box>
                                <FormControl isInvalid={formik.errors.skill} >
                                    <FormLabel>Skill</FormLabel>
                                    <Input name='skill' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.skill} border='1px' borderColor='black' placeholder='Enter skill' py='10px' variant='outline' type='text' />
                                    <FormErrorMessage>{formik.errors.skill}</FormErrorMessage>
                                </FormControl>
                            </Box>

                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => { setOpenModal1(!open) }}>
                            Close
                        </Button>
                        <Button variant='ghost'>Add</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Modal2
