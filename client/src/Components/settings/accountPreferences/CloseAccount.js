import React, { useState } from 'react'
import { Box, Button, Card, CardBody, CardHeader, Heading, Icon, Radio, RadioGroup, Stack, StackDivider, Text } from '@chakra-ui/react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'



const CloseAccount = () => {
    const navigate = useNavigate()

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
                                Close account
                            </Text>
                            <Text fontSize='md'>
                                User, we’re sorry to see you go
                            </Text>
                            <Text color='#666666' fontSize='md'>
                                Just a quick reminder, closing your account means you’ll lose touch with all your connections and all your ongoing project will be lost
                            </Text>
                            <Text color='#666666' fontSize='md'>
                                You’ll no longer have access to your account
                            </Text>

                            <Box mt={'20px'} pt='10px' >
                                <Button color={'white'} colorScheme='blue'>Continue</Button>
                            </Box>
                        </Box>
                    </CardBody>
                </Card>
            </Box>

        </Box>
    )
}

export default CloseAccount

