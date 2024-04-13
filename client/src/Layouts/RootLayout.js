import React, { useContext } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'
import ScrollToTop from '../Components/ScrollToTop'
import { NavFixedContext } from '../Context/NavFixedContext'

const RootLayout = () => {
    const {isFixed}=useContext(NavFixedContext)
    const location = useLocation();
    return (
        <Grid bgColor='#f4f2ee' height='100vh' templateRows='auto 1fr auto'>
            <GridItem  w='100%'>
                <Navbar />
                <ScrollToTop/>
            </GridItem>
            <GridItem mt={{ base: isFixed?"60px":"", md: isFixed?"60px":"" }}>
                <Outlet />
            </GridItem>
            <GridItem display={location==='/register'||'login'?'none':'block'} w='100%'>
                <Footer />
            </GridItem>
        </Grid>
    )
}

export default RootLayout
