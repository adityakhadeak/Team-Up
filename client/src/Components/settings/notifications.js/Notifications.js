import { Box, Card, CardBody, CardHeader, Heading, Icon, Stack, StackDivider, Text } from '@chakra-ui/react'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Notifications = () => {
  const navigate=useNavigate()

  return (
    <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center' p='12px' gap='4'>
    <Box width='60%'  >
      <Card>
        <CardHeader paddingBottom='5px'>
          <Heading fontWeight='500' size='md'>Notifications you receive</Heading>
        </CardHeader>

        <CardBody >
          <Stack divider={<StackDivider color='#666666' margin='1px' />} spacing='2'>
            <Box onClick={()=>{navigate('messaging')}} cursor='pointer' display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
              <Box>
                <Text pt='2' fontSize='md'>
                Messaging
                </Text>
              </Box>

              <Box>
                <Icon color='#666666' as={FaArrowRightLong} />
              </Box>
            </Box>
            <Box onClick={()=>{navigate('posting-and-commenting')}} cursor='pointer' display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
              <Box>
                <Text pt='2' fontSize='md'>

                Posting and commenting
                </Text>
              </Box>

              <Box>
                <Icon color={'#666666'} as={FaArrowRightLong} />
              </Box>
            </Box>
            <Box  onClick={()=>{navigate('projects')}} display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
              <Box>
                <Text pt='2' fontSize='md'>

                  Projects
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

export default Notifications
