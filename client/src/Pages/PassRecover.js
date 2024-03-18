import { Box, Button, Grid, GridItem, Text, } from '@chakra-ui/react'
import React, { useState, useContext } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { RegistrationContext } from '../Context/RegistrationContext.js'
import PassRecoverStep1 from '../Components/passrecover/PassRecoverStep1.js'
import PassRecoverStep2 from '../Components/passrecover/PassRecoverStep2.js'
import PassRecoverStep3 from '../Components/passrecover/PassRecoverStep3.js'
const PassRecover = () => {

    const { passwordRecoverStep, setPasswordRecoverStep } = useContext(RegistrationContext)

  return (
    <Grid fontFamily={'Raleway'} height={'100%'} templateRows={'auto'} templateColumns={  '1fr'} >
      
      <GridItem >
      {passwordRecoverStep==1 && <PassRecoverStep1/>}
      {passwordRecoverStep==2 && <PassRecoverStep2/>}
      {passwordRecoverStep==3 && <PassRecoverStep3/>}
      </GridItem>
    </Grid>
  )
}

export default PassRecover
