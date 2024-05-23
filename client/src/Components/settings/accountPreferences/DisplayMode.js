
import React, { useState } from 'react'
import { Box, Button, Card, CardBody, CardHeader, Heading, Icon, Radio, RadioGroup, Stack, StackDivider, Text } from '@chakra-ui/react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import Modal1 from './Modal1';
import Modal2 from './Modal2';


const DisplayMode = () => {
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
                        <RadioGroup defaultValue='2'>
                            <Stack spacing={5} direction='column'>
                                <Radio colorScheme='green' value='1'>
                                    Always on
                                </Radio>
                                <Radio colorScheme='green' value='2'>
                                    Always off
                                </Radio>
                            </Stack>
                        </RadioGroup>

                    </CardBody>
                </Card>
            </Box>

        </Box>
    )
}

export default DisplayMode

