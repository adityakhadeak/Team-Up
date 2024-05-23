import React, { useState } from 'react'
import { Box, Button, Card, CardBody, CardHeader, Heading, Icon, Radio, RadioGroup, Stack, StackDivider, Text } from '@chakra-ui/react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'



const Phone = () => {
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
                            Phone  number
                            </Text>
                            <Text fontWeight={600} fontSize='md'>
                            Phone number you've added
                            </Text>
                            <Text fontSize='md'>
                                    4568586877
                             </Text>
                            <Box mt={'20px'} pt='10px' >
                            <Button  size='sm' colorScheme='blue' my='5px'>Update Phone</Button>
                            </Box>
                        </Box>
                    </CardBody>
                </Card>
            </Box>

        </Box>
    )
}

export default Phone

