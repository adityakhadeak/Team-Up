import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Select } from '@chakra-ui/react'
import { Box, Button, FormControl, FormLabel, Grid, GridItem, Input, Text, InputRightElement, InputGroup, FormErrorMessage, useConst } from '@chakra-ui/react'
import { Link, Link as ReactRouterLink } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import React, { useContext } from 'react'
import { UserDataContext } from '../../../Context/UserDataContext'

const Modal2 = ({ open, setOpenModal1,skills }) => {
    const { loggedUserData,addUserSkill} = useContext(UserDataContext)    
    const formik = useFormik({
        initialValues: {
            skill: ''
        },
        validateOnBlur: false,
        validateOnChange: false,
        validationSchema: Yup.object({
            skill: Yup.string().required("Skill required")
        }),
        onSubmit:async (values, actions) => {
            if (!formik.errors.skill ) {
                await addUserSkill(formik.values.skill)
                skills.push(formik.values.skill)
                setOpenModal1(!open)
            }
            actions.resetForm()
        }
    })
    return (
        <>
            <Modal isOpen={open} onClose={() => { setOpenModal1(!open) }} >
                <ModalOverlay onClick={() => { setOpenModal1(!open) }} />
                <ModalContent >
                <form onSubmit={formik.handleSubmit}>

                    <ModalHeader>Add Skill</ModalHeader>
                    <ModalCloseButton onClick={() => { setOpenModal1(!open) }} />
                    <ModalBody>

                            <Box>
                                <FormControl isInvalid={formik.errors.skill} >
                                    <FormLabel>Skill</FormLabel>
                                    <Input name='skill' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.skill} border='1px' borderColor='black' placeholder='Enter skill' py='10px' variant='outline' type='text' />
                                    <FormErrorMessage>{formik.errors.skill}</FormErrorMessage>
                                </FormControl>
                            </Box>

                       
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => { setOpenModal1(!open) }}>
                            Close
                        </Button>
                        <Button type='submit' variant='ghost'>Add</Button>
                    </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Modal2
