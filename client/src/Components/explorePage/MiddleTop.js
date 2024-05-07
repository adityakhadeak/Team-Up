import { Avatar, Box, Button, Text, Textarea, Wrap, WrapItem, useDisclosure } from '@chakra-ui/react'
import { IoMdArrowDropdown } from "react-icons/io";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import React from 'react'
import { MdOutlinePermMedia, MdWork } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa6";



const MiddleTop = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box padding='10px' display='flex' justifyContent='center' alignItems='center'>

            <Box width='100%' height='130px' padding='15px' my='10px' display='flex' flexDirection='column' borderRadius='8px' bgColor='#ffffff' >
                <Box width='100%' display='flex' flexDirection='row' justifyContent='start' alignItems='center'>
                    <Box mx='2px'>
                        <Wrap>
                            <WrapItem>
                                <Avatar size='md' name='Aditya Khade' src='https://bit.ly/sage-adebayo' />{' '}
                            </WrapItem>
                        </Wrap>
                    </Box>
                    <Box mx='10px' width='100%'>
                        <Box onClick={onOpen} _hover={{ bgColor: '#ebebeb' }} cursor='pointer' p='5px' height='50px' width='100%' border='solid #b2b2b2 1px' borderRadius='20px' display='flex' alignItems='center' >
                            <Text px='15px' >
                                Start a Post. . .
                            </Text>
                        </Box>

                    </Box>

                </Box>
                <Box my='10px' display='flex' flexDirection='row' gap='2' alignItems='center' justifyContent='space-evenly'>
                    <Box p='10px' _hover={{ bgColor: '#ebebeb' }} borderRadius='10px' as='button' display='flex' flexDirection='row' gap='2' alignItems='center'>
                        <MdOutlinePermMedia cursor='pointer' color='#00a0dc' fontSize='20px' />
                        <Text color='#404040' fontWeight='500'>Media</Text>
                    </Box>
                    <Box p='10px' _hover={{ bgColor: '#ebebeb' }} borderRadius='10px' as='button' display='flex' flexDirection='row' gap='2' alignItems='center'>
                        <FaLaptopCode cursor='pointer' color='#a871ea' fontSize='20px' />
                        <Text color='#404040' fontWeight='500'>Project</Text>
                    </Box>
                    <Box p='10px' _hover={{ bgColor: '#ebebeb' }} borderRadius='10px' as='button' display='flex' flexDirection='row' gap='2' alignItems='center'>
                        <MdWork cursor='pointer' color='#e06847' fontSize='20px' />
                        <Text color='#404040' fontWeight='500'>Internship</Text>
                    </Box>
                </Box>
                <Box>

                </Box>
            </Box>

            <Modal isOpen={isOpen} size='xl' onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Box p='10px' borderRadius='20px' as='button' _hover={{ bgColor: '#ebebeb' }} display='flex' flexDirection='row' justifyContent='start' alignItems='start' mx='2px'>
                            <Wrap>
                                <WrapItem>
                                    <Avatar size='lg' name='Aditya Khade' src='https://bit.ly/sage-adebayo' />{' '}
                                </WrapItem>
                            </Wrap>
                            <Box display='flex' flexDirection='column' justifyContent='start' mx='10px'>
                                <Box gap='1' display='flex' flexDirection='row' alignItems='center'>

                                    <Text my='2px' as='h2' fontSize='20px' fontWeight='600' >Aditya Khade                                    </Text>
                                    <IoMdArrowDropdown />
                                </Box>
                                <Text textAlign='start' lineHeight='10px' my='2px' as='h2' fontSize='14px' fontWeight='600' >Post to anyone</Text>

                            </Box>

                        </Box>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody >
                        <Box my='10px' >
                            <Textarea height='200px' placeholder='What do you want to talk about' />

                        </Box>
                        <Box gap='5' display='flex' flexDirection='row' my='20px'>

                            <Box >
                                <BsEmojiSmile cursor='pointer' fontSize='20px' />
                            </Box>
                            <Box>
                                <MdOutlinePermMedia cursor='pointer' fontSize='20px' />
                            </Box>
                        </Box>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} >
                            Post
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )

}

export default MiddleTop
