import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import LeftSide from '../Components/settings/LeftSide'
import RightSide from '../Components/settings/RightSide.js'

const Settings = () => {
    return (
        <Grid height='100vh' templateColumns="1fr 4fr">
            <GridItem bgColor='#ffffff' >
                <LeftSide/>
            </GridItem>
            <GridItem bgColor='#f3f2ef' >
                <RightSide/>
            </GridItem>
        </Grid>
    )
}

export default Settings
