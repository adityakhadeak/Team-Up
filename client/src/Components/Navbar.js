import { Box, Button, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Box w='100%' borderBottom='solid 0.5px #e6e6e6' boxShadow={'0px 0px 10px 0px #e5e5e5'} display='flex' alignItems='center' justifyContent='center' height='60px' p='5px' px='20px'>
      <Box>
        <Text fontWeight='700' fontSize='22px'>TeamUp</Text>
      </Box>
      <Spacer />
      <Box mx='20px' display='flex' alignItems='center' gap='5' justifyContent='center'>
        <Box >
          <Text> Explore</Text>
        </Box>
        <Box>
          <Text> Create</Text>
          </Box>
        <Box>
          <Text> Community</Text>
          </Box>
      </Box>
      <Box mx='15px' display='flex' alignItems='center' justifyContent='center'>
        <Box mx='5px' display='flex' justifyContent={'center'} alignItems={'center'} py='10px' my='20px'>
          <Button width='100%' height='45px' borderRadius='10px' colorScheme='linkedin' to='/register'>Sign In</Button>
        </Box>
        <Box mx='5px' display='flex' justifyContent={'center'} alignItems={'center'} py='10px' my='20px'>
          <Button width='100%' height='45px' borderRadius='10px' colorScheme='gray' to='/register'>Sign Up</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar
