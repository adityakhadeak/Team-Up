import { Box, Card, CardBody, CardHeader, Heading, Icon, Stack, StackDivider, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { useLocation, useNavigate } from 'react-router-dom';


const AccntPref = () => {
  const [openModal2, setopenModal2] = useState(false)
  const [openModal3, setopenModal3] = useState(false)
  const [openModal4, setopenModal4] = useState(false)
  const [openModal5, setopenModal5] = useState(false)
  const [openModal6, setopenModal6] = useState(false)
  const [openModal7, setopenModal7] = useState(false)

  const navigate = useNavigate()


  return (
    <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center' p='12px' gap='4'>
      <Box width='60%'  >
        <Card>
          <CardHeader paddingBottom='5px'>
            <Heading fontWeight='500' size='md'>Profile information</Heading>
          </CardHeader>
          <CardBody >
            <Stack divider={<StackDivider color='#666666' margin='1px' />} spacing='2'>
              <Box onClick={() => { navigate('profileinfo1') }} cursor='pointer' display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
                <Box >
                  <Text pt='2' fontSize='md'>

                    Name, Location ...etc
                  </Text>
                </Box>
                <Box>
                  <Icon color='#666666' as={FaArrowRightLong} />
                </Box>
              </Box>
              <Box onClick={() => { navigate('skills') }} cursor='pointer' display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
                <Box>
                  <Text pt='2' fontSize='md'>

                    Skills
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
      <Box width='60%'  >
        <Card>
          <CardHeader paddingBottom='5px'>
            <Heading fontWeight='500' size='md'>Display</Heading>
          </CardHeader>

          <CardBody >
            <Stack divider={<StackDivider color='#666666' margin='1px' />} spacing='2'>

              <Box onClick={() => { navigate('darkmode') }} cursor='pointer' display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
                <Box>
                  <Text pt='2' fontSize='md'>
                    Dark mode
                  </Text>
                </Box>

                <Box>
                  <Icon color={'#666666'} as={FaArrowRightLong} />
                </Box>
              </Box>
              <Box onClick={() => { navigate('language') }} cursor='pointer' display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
                <Box>
                  <Text pt='2' fontSize='md'>
                    Language                  
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
      <Box width='60%'  >
        <Card>
          <CardHeader paddingBottom='5px'>
            <Heading fontWeight='500' size='md'>Account Management</Heading>
          </CardHeader>

          <CardBody >
            <Stack divider={<StackDivider color='#666666' margin='1px' />} spacing='2'>
              <Box display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
                <Box>
                  <Text pt='2' fontSize='md'>

                    Hibernate account <Box as='span' fontSize='13px' color='#666666' >(coming soon)</Box>
                  </Text>
                </Box>

                <Box>
                  <Icon color='#666666' as={FaArrowRightLong} />
                </Box>
              </Box>
              <Box onClick={() => { navigate('closeaccount') }} cursor='pointer' display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
                <Box>
                  <Text pt='2' fontSize='md'>
                    Close account
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

export default AccntPref
















