
import React, { useState } from 'react'
import { Box, Button, Card, CardBody, CardHeader, FormControl, FormLabel, Heading, Icon, Radio, RadioGroup, Stack, StackDivider, Switch, Text } from '@chakra-ui/react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'



const PostNotifications = () => {
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
                                <FormControl display='flex' justifyContent='space-between' alignItems='center'>
                                    <FormLabel htmlFor='email-alerts' mb='0'>
                                    Allow post related notifications                                    </FormLabel>
                                    <Switch id='email-alerts' />
                                </FormControl>
                            </Stack>
                        </RadioGroup>

                    </CardBody>
                </Card>
            </Box>

        </Box>
    )
}

export default PostNotifications

