import { Box, Button, Grid, GridItem, Text, } from '@chakra-ui/react'
import React, { useState, useContext } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import RegistrationStep1 from '../Components/registrationForm/RegistrationStep1'
import { RegistrationContext } from '../Context/RegistrationContext.js'
import RegistrationStep2 from '../Components/registrationForm/RegistrationStep2.js'
import OtpInputPage from '../Components/otpPage/OtpInput.js'
const Registration = () => {

  const { setRegistrationStep, registrationStep } = useContext(RegistrationContext)

  return (
    <Grid fontFamily={'Raleway'} height={'100%'} templateRows={'auto'} templateColumns={{ base: '1fr', md: '1fr 2fr' }} >
      <GridItem backgroundColor='#00a0dc' display={{ base: "none", md: 'block' }}>
        <Box height='100%' display='flex' justifyContent='center' alignItems='center' flexDirection='column' padding='20px'>
          <Box my='10px' p='10px' >
            <Text fontWeight='900' color='white' fontSize='35px'>Already Have Account?</Text>
          </Box>
          <Box width='90%' my='10px' p='10px' >
            <Text textAlign='center' color='white' fontSize='15px'>Access your account to explore thrilling projects and discover ways to contribute your talents and knowledge</Text>
          </Box>
          <Box display='flex' justifyContent={'center'} alignItems={'center'} width='100%' py='10px' my='20px'>
            <Button width='70%' height='45px' borderRadius='20px' colorScheme='gray' as={ReactRouterLink} to='/login'>Sign in</Button>
          </Box>
        </Box>
      </GridItem>
      <GridItem >
        {registrationStep==1 && <RegistrationStep1 />}
        {registrationStep==2 && <RegistrationStep2  />}
        {registrationStep==3 && <OtpInputPage type={'verification'}/>}
      </GridItem>
    </Grid>
  )
}

export default Registration
