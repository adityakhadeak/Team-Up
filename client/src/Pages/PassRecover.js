import {  Grid, GridItem } from '@chakra-ui/react'
import React, { useState, useContext } from 'react'
import { AuthContext } from '../Context/AuthContext.js'
import PassRecoverStep1 from '../Components/passrecover/PassRecoverStep1.js'
import PassRecoverStep3 from '../Components/passrecover/PassRecoverStep3.js'
import OtpInputPage from '../Components/otpPage/OtpInput.js'
const PassRecover = () => {

    const { passwordRecoverStep } = useContext(AuthContext)
const [email, setEmail] = useState("")
  return (
    <Grid fontFamily={'Raleway'} height={'100%'} templateRows={'auto'} templateColumns={  '1fr'} >
      
      <GridItem >
      {passwordRecoverStep===1 && <PassRecoverStep1 setEmail={setEmail} />}
      {passwordRecoverStep===2 && <OtpInputPage email={email} type={'other'}/>}
      {passwordRecoverStep===3 && <PassRecoverStep3 email={email}/>}
      </GridItem>
    </Grid>
  )
}

export default PassRecover
