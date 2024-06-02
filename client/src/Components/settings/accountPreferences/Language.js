
import React, { useState } from 'react'
import { Box, Button, Card, CardBody, CardHeader, Heading, Icon, Radio, RadioGroup, Select, Stack, StackDivider, Text } from '@chakra-ui/react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import Modal1 from './Modal1';
import Modal2 from './Modal2';


const Language = () => {
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
                        <Box my='5px'>
                            <Text fontWeight={600} fontSize='md'>
                                Language
                            </Text>
                            <Text fontSize='sm'>
                                Select the language you use on LinkedIn
                            </Text>
                        </Box>
                        <Box width='200px' my='15px'>
                            <Select size={'sm'}  placeholder='Select option'>
                                <option defaultChecked value='option1'>English</option>
                                <option value='option2'>मराठी</option>
                                <option value='option3'>हिंदी</option>
                            </Select>
                        </Box>

                    </CardBody>
                </Card>
            </Box>

        </Box>
    )
}

export default Language

