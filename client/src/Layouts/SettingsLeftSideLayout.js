import React, { useContext } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Outlet, useLocation } from 'react-router-dom'
import { NavFixedContext } from '../Context/NavFixedContext'
import LeftSide from '../Components/settings/LeftSide'

const SettingLeftSideLayout = () => {
    const {isFixed}=useContext(NavFixedContext)
    const location = useLocation();
    return (
        <Grid height='100vh' templateColumns="1fr 4fr">
        <GridItem w='100%' bgColor='#ffffff' >
            <LeftSide/>
        </GridItem>
        <GridItem w='100%' bgColor='#f3f2ef' >
            <Outlet/>
        </GridItem>
    </Grid>
    )
}

export default SettingLeftSideLayout
