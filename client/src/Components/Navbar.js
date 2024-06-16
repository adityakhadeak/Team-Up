import {
  Box, Button, Spacer, Text, Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Avatar,
  useDisclosure,
} from '@chakra-ui/react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { NavFixedContext } from '../Context/NavFixedContext';
import { keyframes } from '@emotion/react';
import { FaUser } from 'react-icons/fa';
import { IoMdArrowDropdown } from 'react-icons/io';
import DropDown from './userNavMenu/DropDown';
import { UserDataContext } from '../Context/UserDataContext';
const Navbar = () => {

  const { isFixed } = useContext(NavFixedContext)
  const { setIsLoggedIn, isLoggedIn } = useContext(UserDataContext)

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('teamup-login'))
  }, [])


  const fadeInDown = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    transform: translateZ(0);
  }
  `;

  const trigger = useRef(null)

  return (
    <Box position={isFixed ? 'fixed' : 'relative'} animation={isFixed ? `${fadeInDown} 0.4s ease-in-out` : ''} backgroundColor='white' zIndex='1000' width='100%' fontFamily={'Raleway'}>
      <Box display={{ base: 'flex', md: 'flex' }} borderBottom='solid 0.5px #e6e6e6' boxShadow={'0px 0px 10px 0px #e5e5e5'} alignItems='center' justifyContent='center' height='60px' p='5px' px='20px'>
        <Box >
          <Link to='/'><Text fontWeight='600' fontSize='22px'>TeamUp</Text></Link>
        </Box>
        <Spacer />
        <Box mx='20px' display='flex' alignItems='center' gap='5' justifyContent='center'>
          <Box >
            <Link to='/explore'><Text> Explore</Text></Link>
          </Box>
          <Box >
            <Link to='/findproj'><Text> Find Project</Text></Link>
          </Box>

        </Box>
        <Box mx='15px' display='flex' alignItems='center' justifyContent='center'>
          {!isLoggedIn && <Box display='flex' alignItems='center' justifyContent='center'>
            <Box mx='5px' display='flex' justifyContent={'center'} alignItems={'center'} py='10px' my='20px'>
              <Link to='/login' >  <Button width='100%' height='45px' borderRadius='10px' colorScheme='linkedin' >Sign In</Button></Link>
            </Box>
            <Box mx='5px' display='flex' justifyContent={'center'} alignItems={'center'} py='10px' my='20px'>
              <Link to='/register' >  <Button width='100%' height='45px' borderRadius='10px' colorScheme='gray' >Sign Up</Button></Link>
            </Box>
          </Box>}
          {isLoggedIn && <Box mx='5px' display='flex' outline='none' justifyContent={'center'} alignItems={'center'} py='10px' my='20px'>
            <Popover
              closeOnBlur={true}>
              <PopoverTrigger  >
                <Box ref={trigger} as='button'
                  cursor='pointer' display='flex' flexDirection='column' alignItems='center'>
                  <Avatar size='xs' name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                  <Box display='flex' flexDirection='row' alignItems='center'>

                    <Text my='2px' as='h2' fontSize='13px' fontWeight='600' >Me</Text>
                    <IoMdArrowDropdown />
                  </Box>
                </Box>

              </PopoverTrigger>
              <PopoverContent width='310px'>
                <PopoverBody >
                  <DropDown trigger={trigger} />
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>}
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
