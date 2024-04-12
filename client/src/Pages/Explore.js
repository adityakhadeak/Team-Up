import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
const Explore = () => {
    return (
        <Grid height='100vh' templateColumns='auto 1fr auto'>
            <GridItem  >
                profile
            </GridItem>
            <Grid templateRows='auto 1fr'>
                <GridItem >
                    Post
                </GridItem>
                <GridItem >
                    feed
                </GridItem>
            </Grid>
            <GridItem >
                news
            </GridItem>
        </Grid>
    )
}

export default Explore
