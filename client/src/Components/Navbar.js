import { Box, Button, Spacer, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { NavFixedContext } from '../Context/NavFixedContext';
import { keyframes } from '@emotion/react';
import { FaUser } from 'react-icons/fa';
const Navbar = () => {

  const { isFixed } = useContext(NavFixedContext)
 

  const fadeInDown = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    transform: translateZ(0);
  }
`; const [isOptionsVisible, setIsOptionsVisible] = useState(false);

const toggleOptionsVisibility = () => {
  setIsOptionsVisible(!isOptionsVisible);
};
const handleOptionClick = () => {
  setIsOptionsVisible(false); // Close the dropdown menu when an option is clicked
};
  return (
<Box position={isFixed ? 'fixed' : 'relative'}  animation={ isFixed?`${fadeInDown} 0.4s ease-in-out`:''} backgroundColor='white' zIndex='1000' width='100%' fontFamily={'Raleway'}>
      <Box display={{ base: 'flex', md: 'flex' }} borderBottom='solid 0.5px #e6e6e6' boxShadow={'0px 0px 10px 0px #e5e5e5'} alignItems='center' justifyContent='center' height='60px' p='5px' px='20px'>
        <Box >
          <Link to='/'><Text  fontWeight='600' fontSize='22px'>TeamUp</Text></Link>
        </Box>
        <Spacer />
        <Box mx='20px' display='flex' alignItems='center' gap='5' justifyContent='center'>
          <Box >
            <Link to='/explore'><Text> Explore</Text></Link>
          </Box>
          <Box >
            <Link to='/findproj'><Text> Find Project</Text></Link>
          </Box>
          <Box>
            <Link to='/'><Text> Create</Text></Link>
          </Box>
          <Box>
            <Link to='/'><Text> Community</Text></Link>
          </Box>
        </Box>
        <Box mx='15px' display='flex' alignItems='center' justifyContent='center'>
          <Box mx='5px' display='flex' justifyContent={'center'} alignItems={'center'} py='10px' my='20px'>
            <Link to='/login' >  <Button  width='100%' height='45px' borderRadius='10px' colorScheme='linkedin' >Sign In</Button></Link>
          </Box>
          <Box mx='5px' display='flex' justifyContent={'center'} alignItems={'center'} py='10px' my='20px'>
            <Link to='/register' >  <Button  width='100%' height='45px' borderRadius='10px' colorScheme='gray' >Sign Up</Button></Link>
          </Box>
          <Box textAlign="center" mx="5px">
      <Box
        transition="all"
        transitionDuration="0.2s"
        _hover={{ fontSize: '20px' }}
        width="20px"
        cursor="pointer"
        onClick={toggleOptionsVisibility}
      >
        <Text as="a">
          <FaUser />
        </Text>
      </Box>
      {isOptionsVisible && (
        <Box position="absolute" top="100%" right="0%" transform="translateX(-18%)" backgroundColor="white" boxShadow="md" borderRadius="md" >
          <Text   my="8px" border="2px solid blue" p="3px" w="100%" borderLeft="none" borderRight="none" borderTop="none"><Link  onClick={handleOptionClick} to='/edituser'>Edit Profile</Link></Text>
          <Text   my="8px" border="2px solid blue" p="3px" w="100%" borderLeft="none" borderRight="none" borderTop="none"><Link  onClick={handleOptionClick} to='/Dashboard'>Dashboard</Link></Text>
          <Text  my="8px"  border="2px solid blue" p="3px" w="100%" borderLeft="none" borderRight="none" borderTop="none"><Link onClick={handleOptionClick}  to='/applicationstatus'>Status of Application</Link></Text>
        </Box>
      )}
    </Box>
        </Box>
      </Box>
      <Box display={{ base: 'none', md: 'none' }} borderBottom='solid 0.5px #e6e6e6' boxShadow={'0px 0px 10px 0px #e5e5e5'} alignItems='center' justifyContent='center' height='60px' p='5px' px='20px' >
        <Box >
          <Text fontWeight='700' fontSize='22px'><GiHamburgerMenu /></Text>
        </Box>
        <Spacer />
        <Box>
          <Text fontWeight='700' fontSize='22px'>TeamUp</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar
