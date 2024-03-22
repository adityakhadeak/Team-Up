import { Box, Button, Input, InputGroup, InputLeftElement, InputRightElement, Text } from '@chakra-ui/react'
import React from 'react'
import home from '../Images/home.png'
import fea1 from '../Images/homepage/fea1.png'
import fea2 from '../Images/homepage/fea2.png'
import fea3 from '../Images/homepage/fea3.png'
import fea4 from '../Images/homepage/fea4.png'
import fea5 from '../Images/homepage/fea5.png'
import { CiSearch } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";

import { BiMessageSquareDots } from "react-icons/bi";
import { PiHandshake } from "react-icons/pi";
import { Link } from 'react-router-dom'


const Home = () => {

  const data = [
    {
      title: '1,000+ learners',
      img: fea1,
      para: 'Join a community of over 1,000 learners already using Project Partner Finder to collaborate on projects.'
    },
    {
      title: 'Any device',
      img: fea2,
      para: 'Use Project Partner Finder on any device, including smartphones, tablets, and desktop computers.'
    },
    {
      title: 'All coding languages',
      img: fea3,
      para: "Whether you're building a website, creating an app,  or exploring machine learning, you can find partners who share your interests and skill level."
    },
    {
      title: 'Free to use',
      img: fea4,
      para: 'Project Partner Finder is free to use and does not include ads or premium features.'
    },
    {
      title: 'No ads',
      img: fea5,
      para: 'Project Partner Finder is free to use and does not include ads or premium features.'
    }

  ]


  const data2 = [
    {
      title: "Search for a partner",
      para: "Use the search bar to find a potential project partner based on skills, interests,and availability.",
      img: <CiSearch />

    },
    {
      title: "Connect with a partner",
      para: "Once you've found a potential partner, send them a message   to introduce yourself and explain what you're looking  for in a partner.",
      img: <BsPeople />

    },
    {
      title: "Decide if you want to work together",
      para: "After you've connected with a potential partner, you can decide if you want to work together on a project.",
      img: <PiHandshake />

    },
    {
      title: "Start your project",
      para: "If you and your potential partner both agree to work together, you can start your project and begin collaborating.",
      img: <BiMessageSquareDots />

    },

  ]

  return (
    <Box fontFamily={'Raleway'}  height='100%' >
      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' px={{ base: '30px', md: '70px' }}>
        <Box py='30px' backgroundImage={home} backgroundRepeat='no-repeat' backgroundPosition='center' position='relative' display='flex' justifyContent='center' alignItems='flex-end' h='500px' width='100%' >
          {/* <img src={home} alt="" /> */}
          <Box width='60%' display='flex' justifyContent='flex-end' flexDirection='column' alignItems='start' >

            <Text fontSize='40px' color='white' fontWeight='700' as='h1'>Find your next project partner</Text>
            <Text fontSize='15px' color='white' w='60%' as='p'>Connect with other learners to work on projects together. Whether you're building a website, creating an app,
              or exploring machine learning, you can find partners who share your interests and skill level.</Text>
            <Box my='20px' w={{md:'40%',base:'100%'}}>
              <InputGroup size='md'>
                <InputLeftElement my='5.5px'><CiSearch fontSize='20px' /></InputLeftElement>
                <Input
                  backgroundColor='white'
                  p='25px'
                  px='4rem'
                  type='text'
                  placeholder='Search for a teammate'
                />
                <InputRightElement px='4px' display='flex' my='5.5px' alignItems='center' justifyContent='center' width='auto' >
                  <Button fontSize='15px' width='80%' height='40px' color='white' borderRadius='10px' colorScheme='linkedin' to='/login'>Find Partner</Button>

                </InputRightElement>
              </InputGroup>
            </Box>
          </Box>
        </Box>
        <Box width='72%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
          <Text  textAlign='center' my='10px' fontSize='35px' fontWeight='900' as='h1'>Why learners are using Project Partner Finder</Text>
          <Box display='flex' alignItems='center' justifyContent='center' textAlign='left' my='15px' as='p'>
            <Text textAlign='center' width={{base:'80%', md:'52rem'}}>
              Project Partner Finder is a place where learners can find partners to work with on projects. It's a great way to
              connect with others who share your interests and skills. Here are some reasons why learners are using Project Partner Finder:
            </Text>
          </Box>


        </Box>
        <Box my='10px' flexWrap='wrap' display='flex' justifyContent='center' alignItems='center' gap='0'>
          {data.map((fea, key) => (
            <Box cursor='pointer' transition='all' transitionDuration='0.3s' h='275px' p='8px' my='10px' py='12px' _hover={{ boxShadow: '0px 0px 10px 0px #e5e5e5' }} rounded='md' w='200px'>
              <img width='190px' src={fea.img} alt="" />
              <Box my='15px' as='p'>
                <Text fontWeight='600' as='h3'>{fea.title}</Text>
                <Text fontSize='13px' color='#637a87' as='p'>{fea.para}</Text>
              </Box>
            </Box>
          ))}
        </Box>
        <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' my='15px' width='72%'>
          <Text  my='10px' fontSize='30px' fontWeight='700'>How it works</Text>
          <Box my='10px' display='flex' flexWrap='wrap' justifyContent={{md:'space-between',base:'center'}} alignItems='center' gap='10'>
            {data2.map((wor, key) => (
              <Box cursor='pointer' h='200px' border={'solid 2px #dbe3e5'} p='12px' boxShadow={'0px 0px 10px 0px #e5e5e5'} rounded='10px' w='210px'>
                <Box as='span'>{wor.img}</Box>
                <Box my='15px' as='p'>
                  <Text fontWeight='700' as='h3'>{wor.title}</Text>
                  <Text color='#637a87' fontSize='13px' mt='5px' as='p'>{wor.para}</Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box my='10px' display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
          <Text my='5px' textAlign='center' fontSize='35px' fontWeight='900' as='h1'>
            Get started with Project Partner Finder
          </Text>
          <Text my='5px' textAlign='center' width='50%'>
            Connect with other learners to work on projects together. Whether you're building a website,
            creating an app, or exploring machine learning, you can find partners who
            share your interests and skill level.
          </Text>
          <Box display='flex' justifyContent={'center'} alignItems={'center'} py='10px' my='20px'>
           <Link to='/register'>
           <Button width='100%' height='45px' borderRadius='10px' colorScheme='linkedin' to='/register'>Sign up</Button>
           </Link> 
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
