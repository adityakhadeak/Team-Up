import { Box, Button, FormControl, FormLabel, Grid, GridItem, Input, Text, InputRightElement, InputGroup, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Textarea } from '@chakra-ui/react'
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
const postproj = () => {


  return (

    <Box height='100%' display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Box width={{ base: '80%', md: '50%' }} height='600px' rounded='md' bg='white' padding='35px' my='20px' >
        <Text as='h1' fontSize='30px' fontWeight='bold' >Post a project</Text>
        <form>
          <FormControl p='2px' my='5px'>
            <FormLabel>Title</FormLabel>
            <Input border='1px' backgroundColor='#f0f2f5' borderColor='black' placeholder='Write a descriptive title for your project' py='25px' variant='outline' type='title' />
          </FormControl>
          <FormControl p='2px' my='5px'>
            <FormLabel>Description</FormLabel>
            <Textarea placeholder='Describe your project in detail.What are you looking to achieve?what will be deliverables be?' backgroundColor='#f0f2f5' borderColor='black'
              py='25px'
              variant='outline'
              type='=description' h='8rem' />

          </FormControl>
          <FormControl p='2px' my='5px'>
            <FormLabel>Skills required </FormLabel>
            <Select border='1px' backgroundColor='#f0f2f5' borderColor='black' placeholder='Select skills'  variant='outline' type='skills'>
              <option value='option1'>C </option>
              <option value='option2'>C++ </option>
              <option value='option3'>Java </option>
              <option value='option4'>Python</option>
              <option value='option5'>html</option>
              <option value='option6'>css </option>
              <option value='option7'>javascript</option>
              <option value='option8'>React js</option>
              <option value='option9'>Node js</option>
              <option value='option10'>MongoDB</option>
              <option value='option11'>typescript</option>
              <option value='option12'>flutter</option>
              <option value='option13'>Wordpress</option>
              <option value='option14'>Mysql</option>
              <option value='option15'>Figma</option>
            </Select>
          </FormControl>
          <FormControl p='2px' my='5px'>
            <FormLabel>Project Duration (in months)</FormLabel>
            <NumberInput step={1} defaultValue={1} min={1} max={12}>
              <NumberInputField border='1px' backgroundColor='#f0f2f5' borderColor='black' placeholder='Write a descriptive title for your project' py='25px' variant='outline' type='duration' />
              <NumberInputStepper >
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <Box display='flex' justifyContent={'center'} alignItems={'center'} width='100%' py='10px' my='20px'>
            <Button width='100%' height='45px' borderRadius='10px' colorScheme='linkedin'>Submit</Button>
          </Box>

        </form>


      </Box>
    </Box>

  )
}

export default postproj
