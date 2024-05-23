import { Box, Card, CardBody, CardHeader, Heading, Icon, Stack, StackDivider, Text } from '@chakra-ui/react'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const SignInAndSecurity = () => {
  const navigate=useNavigate()
  return (
    <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center' p='12px' gap='4'>
      <Box width='60%'  >
        <Card>
          <CardHeader paddingBottom='5px'>
            <Heading fontWeight='500' size='md'>Account Access</Heading>
          </CardHeader>

          <CardBody >
            <Stack divider={<StackDivider color='#666666' margin='1px' />} spacing='2'>
              <Box onClick={()=>{navigate('manage-email')}} cursor='pointer' display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
                <Box display='flex'>
                  <Text  fontSize='md'>

                    Email address
                  </Text>
                </Box>

                <Box gap={2} display='flex' alignItems='center'>
                  <Text  color='#666666' fontSize='sm'>
                  dummy@gmail.com
                  </Text>
                  <Icon color='#666666' as={FaArrowRightLong} />
                </Box>
              </Box>
              <Box onClick={()=>{navigate('manage-phone')}} cursor='pointer' display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
                <Box>
                  <Text  fontSize='md'>

                    Phone number
                  </Text>
                </Box>

                <Box>
                  <Icon color={'#666666'} as={FaArrowRightLong} />
                </Box>
              </Box>
              <Box onClick={()=>{navigate('change-password')}} cursor='pointer' display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
                <Box>
                  <Text  fontSize='md'>

                    Change password
                  </Text>
                </Box>

                <Box>
                  <Icon color={'#666666'} as={FaArrowRightLong} />
                </Box>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Box>

    </Box>
  )
}

export default SignInAndSecurity
