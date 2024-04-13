import { Avatar, Box, Text, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'

const LeftSide = () => {
  return (
    <Box padding='10px' display='flex' justifyContent='center' alignItems='center'>
      <Box p='15px' my='10px' width='250px' display='flex' flexDirection='column' alignItems='center' height='400px' borderRadius='8px' bgColor='#ffffff'>
        <Box borderBottom='solid #e8e8e8 0.5px' display='flex' flexDirection='column' alignItems='center' height='200px' >
          <Box my='10px'>
            <Wrap>
              <WrapItem>
                <Avatar size='lg' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />{' '}
              </WrapItem>
            </Wrap>
          </Box>
          <Box my='5px' flexDirection='column' display='flex' justifyContent='center' alignItems='center'>
            <Text my='2px' as='h2' fontSize='16px' fontWeight='600' >Aditya Khade</Text>
            <Text my='2px' color='#666666' width='200px' textAlign='center' fontSize='12px'>Node JS Developer Intern @Swasth Mind | Coding Enthusiast | Full Stack Developer (MERN)</Text>
          </Box>
        </Box>

        <Box my='10px' width='200px' display='flex' flexDirection='column'  justifyContent='flex-start' alignItems='start'>
          <Box my='2px' width='200px' fontSize='13px' color='#a4a4a4' display='flex'  flexDirection='row' gap='20' justifyContent='space-between' >
            <Text fontWeight='500'> Profile views</Text>
            <Text>59</Text>
          </Box>
          <Box  my='2px' width='200px' fontSize='13px' color='#a4a4a4' display='flex'  flexDirection='row' gap='20' justifyContent='space-between' >
            <Text fontWeight='500'> Post impressions</Text>
            <Text>9</Text>
          </Box>
        </Box>


      </Box>
    </Box >
  )
}

export default LeftSide
