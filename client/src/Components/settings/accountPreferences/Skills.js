
import React, { useContext, useState } from 'react'
import { Box, Button, Card, CardBody, CardHeader, Heading, Icon, Stack, StackDivider, Text } from '@chakra-ui/react'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import Modal1 from './Modal1';
import Modal2 from './Modal2';
import { UserDataContext } from '../../../Context/UserDataContext';
import { MdOutlineDelete } from "react-icons/md";


const Skills = () => {
    const { loggedUserData, setLoggedUserData, deleteSkill } = useContext(UserDataContext)

    const skills = loggedUserData.skills
    const navigate = useNavigate()
    const [openModal1, setOpenModal1] = useState(false)
    const openModal = () => {
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
                            <Box cursor='pointer' display={'flex'} alignItems='center' gap={2} color={'#666666'}>
                                <Button onClick={openModal} size='sm' colorScheme='blue' my='5px'>Add Skill</Button>
                            </Box>
                        </Box>

                    </CardHeader>
                    <CardBody >
                        <Stack divider={<StackDivider color='#666666' margin='1px' />} spacing='2'>
                            {
                                skills.length == 0 ? (<Box textAlign={'center'}>No Skills added</Box>) : (

                                    skills.map((skill, index) => (
                                        <Box px={'10px'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} key={index}>
                                            <Box pt='2' fontSize='md'>
                                                {skill}
                                            </Box>
                                            <Box cursor={'pointer'}
                                                onClick={() => {
                                                    deleteSkill()
                                                }}>
                                                <MdOutlineDelete fontSize={'20px'} />
                                            </Box>
                                        </Box>
                                    ))

                                )
                            }

                        </Stack>

                    </CardBody>
                </Card>
            </Box>
            <Modal2 skills={skills} open={openModal1} openModal={openModal} setOpenModal1={setOpenModal1} />

        </Box>
    )
}

export default Skills
