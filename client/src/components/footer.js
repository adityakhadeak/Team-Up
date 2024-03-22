// Footer.js
import { Box, Link, Text, Icon } from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

import React from 'react';

const Footer = () => {
  return (
    <footer>
      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' width='100%' height='400px'>
        <Box  width='70%' gap='10' my='15px' display='flex' justifyContent='space-evenly' alignItems='center' >
          <Box mx='5px'> <Link><Text> About</Text></Link>    </Box>
          <Box mx='5px'><Link><Text> Explore</Text></Link></Box>
          <Box mx='5px'><Link><Text> Create</Text></Link></Box>
          <Box mx='5px'><Link><Text> Message</Text></Link></Box>
          <Box mx='5px'><Link><Text> Community</Text></Link></Box>
        </Box>
        <Box width='70%' gap='14' my='15px' display='flex' justifyContent='space-evenly' alignItems='center' >
          <Box mx='5px'> <Link><Text> Projects</Text></Link> </Box>
          <Box mx='5px'> <Link><Text> Posts</Text></Link> </Box>
          <Box mx='5px'> <Link><Text> Events</Text></Link> </Box>
          <Box mx='5px'> <Link><Text> People</Text></Link> </Box>
          <Box mx='5px'><Link><Text> Home</Text></Link> </Box>
        </Box>
        <Box width='74%' gap='10' my='15px' display='flex' justifyContent='space-evenly' alignItems='center' >
          <Box mx='5px'> <Link><Text> Developer</Text></Link> </Box>
          
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
