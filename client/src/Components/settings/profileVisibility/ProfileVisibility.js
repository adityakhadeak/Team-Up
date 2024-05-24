
import { Box, Card, CardBody, CardHeader, Heading, Icon, Stack, StackDivider, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { useLocation, useNavigate } from 'react-router-dom';

const ProfileVisibility = () => {

  const navigate = useNavigate()


  return (
    <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center' p='12px' gap='4'>
      <Box width='60%'  >
        <Card>
          <CardHeader paddingBottom='5px'>
            <Heading fontWeight='500' size='md'>Visibility of your profile & network</Heading>
          </CardHeader>
          <CardBody >
            <Stack divider={<StackDivider color='#666666' margin='1px' />} spacing='2'>
              <Box pt={'2px'} onClick={() => { navigate('edit-public-profile') }} cursor='pointer' display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
                <Box >
                  <Text  fontSize='md'>
                    Edit your public profile
                  </Text>
                </Box>
                <Box>
                  <Icon color='#666666' as={FaArrowRightLong} />
                </Box>
              </Box>

            </Stack>
          </CardBody>
        </Card>
      </Box>
    </Box>
  )
}

export default ProfileVisibility
















