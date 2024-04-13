import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import LeftSide from '../Components/explorePage/LeftSide'
import RightSide from '../Components/explorePage/RightSide'
import MiddleTop from '../Components/explorePage/MiddleTop'
import MiddleBottom from '../Components/explorePage/MiddleBottom'
const Explore = () => {
    return (
        <Grid bgColor='#f4f2ee' my='20px' mx='150px' height='100vh' templateColumns='1fr 3fr 1fr'>
            <GridItem bgColor='#f4f2ee'  >
                <LeftSide />
            </GridItem>
            <Grid bgColor='#f4f2ee' templateRows='auto 2fr'>
                <GridItem  >
                    <MiddleTop />
                </GridItem>
                <GridItem  >
                    <MiddleBottom/>
                </GridItem>
            </Grid>
            <GridItem   >
                <RightSide />
            </GridItem>
        </Grid>
    )
}

export default Explore
