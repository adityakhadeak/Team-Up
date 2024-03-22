import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'

const RootLayout = () => {
    const location = useLocation();
    console.log(location.pathname)
    return (
        <Grid height='100vh' templateRows='auto 1fr auto'>
            <GridItem w='100%'>
                <Navbar />
            </GridItem>
            <GridItem>
                <Outlet />
            </GridItem>
            <GridItem w='100%'>
                <Footer />
            </GridItem>
        </Grid>
    )
}

export default RootLayout
