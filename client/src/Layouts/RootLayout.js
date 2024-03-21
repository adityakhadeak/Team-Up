import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const RootLayout = () => {
    const location = useLocation();
    console.log(location.pathname)
    return (
        <Grid height='100vh' templateRows='auto 1fr'>
            <GridItem w='100%'>
                <Navbar />
            </GridItem>
            <GridItem>
                <Outlet />
            </GridItem>
        </Grid>
    )
}

export default RootLayout
