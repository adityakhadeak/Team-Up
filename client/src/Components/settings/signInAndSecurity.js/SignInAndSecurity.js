import { Box, Card, CardBody, CardHeader, Heading, Icon, Stack, StackDivider, Text } from '@chakra-ui/react'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const SignInAndSecurity = () => {
  return (
    <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center' p='12px' gap='4'>
    <Box width='60%'  >
      <Card>
        <CardHeader paddingBottom='5px'>
          <Heading fontWeight='500' size='md'>Account Access</Heading>
        </CardHeader>

        <CardBody >
          <Stack divider={<StackDivider color='#666666' margin='1px' />} spacing='2'>
            <Box display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
              <Box>
                <Text pt='2' fontSize='md'>

                  Email address
                </Text>
              </Box>

              <Box>
                <Icon color='#666666' as={FaArrowRightLong} />
              </Box>
            </Box>
            <Box display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
              <Box>
                <Text pt='2' fontSize='md'>

                  Phone number
                </Text>
              </Box>

              <Box>
                <Icon color={'#666666'} as={FaArrowRightLong} />
              </Box>
            </Box>
            <Box display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
              <Box>
                <Text pt='2' fontSize='md'>

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
