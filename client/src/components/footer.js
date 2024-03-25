// Footer.js
import { Box, Link, Text, Icon } from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaLinkedinIn, FaCopy, FaCopyright } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { AiOutlineCopyright } from "react-icons/ai";

import React from 'react';
import { FcCopyright } from 'react-icons/fc';

const Footer = () => {
  return (
    <footer >
      <Box  display='flex' flexDirection='column' justifyContent='center' alignItems='center' width='100%' height='270px'>
        <Box width='70%' gap='10' my='15px' display='flex' justifyContent='space-evenly' alignItems='center' >
          <Box width='100px' mx='5px'><Link _hover={{ textDecoration: 'none' }}  > About</Link>    </Box>
          <Box width='100px' mx='5px'><Link _hover={{ textDecoration: 'none' }}  > Explore</Link></Box>
          <Box width='100px' mx='5px'><Link _hover={{ textDecoration: 'none' }}  > Create</Link></Box>
          <Box width='100px' mx='5px'><Link _hover={{ textDecoration: 'none' }}  > Message</Link></Box>
          <Box width='100px' mx='5px'><Link _hover={{ textDecoration: 'none' }}  > Community</Link></Box>
        </Box>
        <Box width='70%' gap='14' my='15px' display='flex' justifyContent='space-evenly' alignItems='center' >
          <Box width='90px' mx='5px'> <Link _hover={{ textDecoration: 'none' }}   >Projects</Link> </Box>
          <Box width='90px' mx='5px'> <Link _hover={{ textDecoration: 'none' }}  >Posts</Link> </Box>
          <Box width='90px' mx='5px'> <Link _hover={{ textDecoration: 'none' }}  >Events</Link> </Box>
          <Box width='90px' mx='5px'> <Link _hover={{ textDecoration: 'none' }}  >People</Link> </Box>
          <Box width='90px' mx='5px'> <Link _hover={{ textDecoration: 'none' }}   >Home</Link> </Box>
        </Box>
        <Box width='74%' gap='10' my='15px' display='flex' justifyContent='space-evenly' alignItems='center' >
          <Box width='100px' mx='5px'> <Link _hover={{ textDecoration: 'none' }}><Text> Developer</Text></Link> </Box>

        </Box>
        <Box width='74%' gap='4' height='40px' my='15px' display='flex' justifyContent='center' alignItems='center' >
          <Box transition='all' transitionDuration='0.2s' _hover={{ fontSize: '20px' }} textAlign='center' width='20px' mx='5px'> <Text cursor='pointer' as='a'>< FaInstagram /></Text></Box>
          <Box transition='all' transitionDuration='0.2s' _hover={{ fontSize: '20px' }} textAlign='center' width='20px' mx='5px'> <Text cursor='pointer' as='a' ><FaLinkedinIn /></Text></Box>
          <Box transition='all' transitionDuration='0.2s' _hover={{ fontSize: '20px' }} textAlign='center' width='20px' mx='5px'> <Text cursor='pointer' as='a' ><FaGithub /></Text></Box>

        </Box>
        <Box width='74%' gap='2' my='15px' display='flex' justifyContent='center' alignItems='center' >
          <Box mx='5px' display='flex' flexDirection='row' alignItems='center'>< AiOutlineCopyright />  <Text mx='5px' fontSize='13' > TeamUp 2024
          </Text></Box>


        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
