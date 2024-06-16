import React, { useContext, useState } from 'react'
import { Box, Button, Card, CardBody, CardHeader, Heading, Icon, Stack, StackDivider, Text } from '@chakra-ui/react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import Modal1 from './Modal1';
import { UserDataContext } from '../../../Context/UserDataContext';


const ProfileInfo1 = () => {
    const navigate = useNavigate()
    const {loggedUserData}=useContext(UserDataContext)
    const [openModal1, setOpenModal1] = useState(false)
    const openModal = () => {
        setOpenModal1(!openModal1)
    }
    console.log(loggedUserData.firstname)
    console.log(loggedUserData.gender)
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
                        <Box px='20px' width='100%' gap={20} display='flex' justifyContent='start' alignItems='center' >
                            <Box width='50%' gap='10' cursor='pointer' display='flex' flexDirection='column' alignItems='start'>
                                <Box  >
                                    <Text fontSize='md'>
                                        First name
                                    </Text>
                                    <Text fontSize='md'>
                                    {loggedUserData.firstname?loggedUserData.firstname:"Not saved"}
                                    </Text>
                                </Box>

                                <Box  >
                                    <Text fontSize='md'>
                                        Gender
                                    </Text>
                                    <Text fontSize='md'>
                                    {loggedUserData.gender?loggedUserData.gender:"Not saved"}
                                    </Text>
                                </Box>

                                <Box  >
                                    <Text fontSize='md'>
                                        Location
                                    </Text>
                                    <Text fontSize='md'>
                                    {loggedUserData.location?loggedUserData.location:"Not saved"}
                                    </Text>
                                </Box>



                            </Box>
                            <Box width='50%' gap='10' display='flex' flexDirection='column' justifyContent='space-between' alignItems='start'>
                                <Box  >
                                    <Text fontSize='md'>
                                        Last name
                                    </Text>
                                    <Text fontSize='md'>
                                    {loggedUserData.lastname?loggedUserData.lastname:"Not saved"}
                                    </Text>
                                </Box>
                                <Box >
                                    <Text fontSize='md'>
                                        DOB
                                    </Text>
                                    <Text fontSize='md'>
                                    {loggedUserData.dob?loggedUserData.dob:"Not saved"}
                                    </Text>
                                </Box>

                                <Box >
                                    <Text fontSize='md'>
                                        Headline
                                    </Text>
                                    <Text fontSize='md'>
                                    {loggedUserData.headline?loggedUserData.headline:"Not saved"}
                                    </Text>
                                </Box>


                            </Box>

                        </Box>
                        <Box px='20px' my='20px' >
                            <Text fontSize='md'>
                                About
                            </Text>
                            <Text fontSize='md'>
                            {loggedUserData.about?loggedUserData.about:"Not saved"}
                            </Text>
                        </Box>
                        <Box mt={'20px'} pt='10px' display='flex' justifyContent='end'>
                            <Button onClick={openModal} colorScheme='blue'>Update Info</Button>
                        </Box>
                    </CardBody>
                </Card>
            </Box>
            <Modal1 open={openModal1} openModal={openModal} setOpenModal1={setOpenModal1} />

        </Box>
    )
}

export default ProfileInfo1
