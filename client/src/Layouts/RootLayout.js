import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'
import ScrollToTop from '../Components/ScrollToTop'

const RootLayout = () => {
    const location = useLocation();
    return (
        <Grid height='100vh' templateRows='auto 1fr auto'>
            <GridItem w='100%'>
                <Navbar />
                <ScrollToTop/>
            </GridItem>
            <GridItem>
                <Outlet />
            </GridItem>
            <GridItem display={location==='/register'||'login'?'none':'block'} w='100%'>
                <Footer />
            </GridItem>
        </Grid>
    )
}

export default RootLayout
