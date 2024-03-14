import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar.js'

const RootLayout = () => {
    return (
        <Grid height='100vh' templateRows='auto 1fr'>
            <GridItem>
                <Navbar />
            </GridItem>
            <GridItem>
                <Outlet />
            </GridItem>
        </Grid>
    )
}

export default RootLayout
