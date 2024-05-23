
import React, { useState } from 'react'
import { Box, Button, Card, CardBody, CardHeader, Heading, Icon, Stack, StackDivider, Text } from '@chakra-ui/react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import Modal1 from './Modal1';
import Modal2 from './Modal2';


const Skills = () => {
    const skills = ["React", "HTML", "CSS", "JS", "MERN stack"]
    const navigate = useNavigate()
    const [openModal1, setOpenModal1] = useState(false)
    const openModal=()=>{
        setOpenModal1(!openModal1)
      }
    return (
        <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center' p='12px' gap='4'>

            <Box width='60%'  >
                <Card>
                    <CardHeader paddingBottom='5px'>
                        <Box display='flex' justifyContent='space-between' alignItems='center' >
                            <Box onClick={() => { navigate(-1) }} cursor='pointer' display={'flex'} alignItems='center' gap={2} color={'#666666'}>
                                <Icon fontSize='12px' as={FaArrowLeftLong} />
                                <Text fontSize='12px'>Back</Text>
                            </Box>
                            <Box  cursor='pointer' display={'flex'} alignItems='center' gap={2} color={'#666666'}>
                            <Button onClick={openModal} size='sm' colorScheme='blue' my='5px'>Add Skill</Button>
                            </Box>
                        </Box>

                    </CardHeader>
                    <CardBody >
                        <Stack divider={<StackDivider color='#666666' margin='1px' />} spacing='2'>
                            {
                                skills.map((skill, index) => (
                                    <Box key={index}>
                                        <Text pt='2' fontSize='md'>

                                            {skill}
                                        </Text>
                                    </Box>
                                ))
                            }

                        </Stack>

                    </CardBody>
                </Card>
            </Box>
            <Modal2 open={openModal1} openModal={openModal} setOpenModal1={setOpenModal1} />

        </Box>
    )
}

export default Skills
