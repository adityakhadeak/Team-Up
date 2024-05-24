import { Avatar, Box, Button, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const DropDown = () => {
    return (
        <Box display='flex'   flexDirection='column' justifyContent='start' alignItems='start' height='470px'>
            <Box py='5px'  borderBottom='solid #e8e8e8 0.5px' display='flex' flexDirection='column' justifyContent='start' alignItems='center'>
                <Box my='5px' display='flex' flexDirection='row' justifyContent='start' alignItems='start'  >
                    <Box mx='5px'>
                        <Wrap>
                            <WrapItem>
                                <Avatar size='lg' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />{' '}
                            </WrapItem>
                        </Wrap>
                    </Box>
                    <Box mx='5px' flexDirection='column' display='flex' justifyContent='center' alignItems='start'>
                        <Text my='2px' as='h2' fontSize='16px' fontWeight='600' >Aditya Khade</Text>
                        <Text my='2px' color='#666666' width='200px' textAlign='start' fontSize='15px'>Node JS Developer Intern @Swasth Mind | Coding Enthusiast | Full Stack Developer (MERN)</Text>
                    </Box>
                </Box>
                <Button size='sm' colorScheme='blue' my='5px'>View profile</Button>
            </Box>
            <Box borderBottom='solid #e8e8e8 0.5px' py='5px' width='100%'>
                <Box>
                    <Text fontWeight='600'>Account</Text>
                </Box>
                <VStack my='5px' mx='2px' color='#666666' fontSize='15px' align='start'>
                    <Link to='/settings/account'>Settings & privacy</Link>
                    <Link>Help</Link>
                    <Link>Language</Link>
                </VStack>
            </Box>
            <Box borderBottom='solid #e8e8e8 0.5px' py='5px' width='100%'>
                <Box>
                    <Text fontWeight='600'>Manage</Text>
                </Box>
                <VStack my='5px' mx='2px' color='#666666' fontSize='15px' align='start'>
                    <Link>Post & Activity</Link>
                    <Link>Internship posting account</Link>
                    <Link>Language</Link>
                </VStack>
            </Box>
            <Box py='5px' >
                <Box mx='2px' color='#666666' fontSize='15px' align='start'>
                    <Link>Sign Out</Link>
                </Box>

            </Box>
        </Box>
    )
}

export default DropDown
