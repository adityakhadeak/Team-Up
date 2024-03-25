import { Box, Button, Input, InputGroup, InputLeftElement, InputRightElement, Text } from '@chakra-ui/react'
import React from 'react'
import bgmain from '../Images/findproject/bgmain.png'
import recom1 from '../Images/findproject/recom1.png'
import recom2 from '../Images/findproject/recom2.png'
import recom3 from '../Images/findproject/recom3.png'
import recom4 from '../Images/findproject/recom4.png'
import recom5 from '../Images/findproject/recom5.png'
import { CiSearch } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";

import { BiMessageSquareDots } from "react-icons/bi";
import { PiHandshake } from "react-icons/pi";
import { Link } from 'react-router-dom'


const Findproject = () => {

  const data = [
    {
      title: 'Build a website for a new company',
      img: recom1,
    },
    {
      title: 'Design a logo for a local business',
      img: recom2,
    },
    {
      title: 'Write a blog post about new technology',
      img: recom3,
    },
    {
      title: 'Create a social media campaign for a startup',
      img: recom4,
    },
    {
      title: 'Update an iOS app for the latest iPhone',
      img: recom5,
    }

  ]


 

  return (
    <Box fontFamily={'Raleway'}  height='100%' >
      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' px={{ base: '30px', md: '70px' }}>
        <Box py='30px' backgroundImage={bgmain} backgroundRepeat='no-repeat' backgroundPosition='center' position='relative' display='flex' justifyContent='center' alignItems='flex-end' h='500px' width='100%' >
          {/* <img src={home} alt="" /> */}
          <Box width='60%' display='flex' justifyContent='flex-end' flexDirection='column' alignItems='start' >

            <Text fontSize='40px' color='white' fontWeight='700' as='h1'>Find the right project for you</Text>
            <Text fontSize='15px' color='white' w='60%' as='p'>Create a profile and tell us about your skills. We'll match you with the right projects.</Text>
            <Box my='20px' w={{md:'40%',base:'100%'}}>
              <InputGroup size='md'>
                <InputLeftElement my='5.5px'><CiSearch fontSize='20px' /></InputLeftElement>
                <Input
                  backgroundColor='white'
                  p='25px'
                  px='4rem'
                  type='text'
                  placeholder='Search for a project'
                />
                <InputRightElement px='4px' display='flex' my='5.5px' alignItems='center' justifyContent='center' width='auto' >
                  <Button fontSize='15px' width='80%' height='40px' color='white' borderRadius='10px' colorScheme='linkedin' to='/login'>Search</Button>

                </InputRightElement>
              </InputGroup>
            </Box>
          </Box>
        </Box>
        <Text mt='20px' textAlign='left' width='70%'  fontSize='26px' fontWeight='600' as='h1'>Recommended for you</Text>
        <Box  flexWrap='wrap' display='flex' justifyContent='center' alignItems='center' gap='0'>
          {data.map((fea, key) => (
            <Box cursor='pointer' h='275px' p='8px' my='10px' py='12px'  rounded='md' w='200px'>
              <img width='190px' src={fea.img} alt="" />
              <Box my='15px' as='p'>
                <Text fontWeight='600' as='h3'>{fea.title}</Text>
              </Box>
            </Box>
          ))}
        </Box>
        
        
      </Box>
    </Box>
  )
}

export default Findproject
