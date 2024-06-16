import React, { useContext, useEffect } from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'
import ScrollToTop from '../Components/ScrollToTop'
import { NavFixedContext } from '../Context/NavFixedContext'
import { UserDataContext } from '../Context/UserDataContext'

const RootLayout = () => {
    const { isLoggedIn}=useContext(UserDataContext)
    const navigate=useNavigate()

    useEffect(() => {
      if (!isLoggedIn) {
        navigate('/login')
      }
    }, [])
    


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
