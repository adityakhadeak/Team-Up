// Footer.js
import { Box, Link, Text, Icon } from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

import React from 'react';

const Footer = () => {
  return (
    <footer>
      {/* Your footer content */}
      <Box bg='#2088f1' my='4rem' p='12px' borderTopLeftRadius='17px' borderTopRightRadius='17px'>
        <Box display='Flex' justifyContent='space-around' color='black'>
          <Box>
            <Text>About Us</Text>
          </Box>
          <Box>
            <Text>Privacy Policy</Text>
          </Box>
          <Box>
            <Text>Terms Of Serivce</Text>
          </Box>
          <Box>
            <Text>Help</Text>
          </Box>
          <Box>
            <Text>Contact Us</Text>
          </Box>
        </Box>
        <Text fontWeight='bold' color='black' alignItems='center' textAlign='center' my='20px'>Get In Touch</Text>
        <Box display='flex' color='black' alignItems='center' justifyContent='center' textAlign='center' my='15px'>
          <Box mx='12px'>
            <Icon _hover={{ transform: 'scale(1.2)' }}as={FaInstagram} boxSize={6} /></Box>
          <Box mx='12px'> <Icon _hover={{ transform: 'scale(1.2)' }} as={FaLinkedin} boxSize={6} /></Box>
          <Box mx='12px'><Icon _hover={{ transform: 'scale(1.2)' }} as={FaGithub} boxSize={6} /></Box>
          <Box mx='12px'><Icon _hover={{ transform: 'scale(1.2)' }} as={FaTwitter} boxSize={6} /></Box>
        </Box>
        <Box p="4">
          <Box display="flex" alignItems="center" justifyContent="center" mb="4">
            <Box mx="4">
              <Icon _hover={{ transform: 'scale(1.2)' }} as={FaMapMarkerAlt} boxSize={6} />
            </Box>
            <Box>
              123 Main Street, Cityville, State, Zip Code
            </Box>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center" mb="4">
            <Box mx="4">
              <Icon _hover={{ transform: 'scale(1.2)' }}as={FaPhone} boxSize={6} />
            </Box>
            <Box>
              <Link href="tel:+1234567890">+1 (123) 456-7890</Link>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Box mx="4">
              <Icon _hover={{ transform: 'scale(1.2)' }} as={FaEnvelope} boxSize={6} />
            </Box>
            <Box>
              <Link href="mailto:info@example.com">info@example.com</Link>
            </Box>
            
          </Box>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
