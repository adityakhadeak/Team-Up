import { Box, Button, Collapse, Divider, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import banner from '../Images/1713372536782.jpg'
import profile from '../Images/1713502700904.jpg'
const UserProfile = () => {
  const [experience, setExperience] = useState([])
  const [skills, setSkill] = useState([])
  const [education, setEducation] = useState({})
  const [showAllSkills, setShowAllSkills] = useState(false)
  const handleToggle = () => {
    setShowAllSkills(!showAllSkills)
  }
  const skill = ['React', "Node.js", "HTML", "CSS", "Javascript"]
  const edu = {
    'collegeName': "Pillai College Of Engineering", "eductionType": "Bachelor of Technology - BTech, Computer Engineering", "startDate": "Dec 2021", "endDate": "Dec 2025", "collegeAddress": "New Panvel ,Navi Mumbai"
  }
  const exp = [
    { "title": " Node JS Developer", "companyName": "Swasth Mind", "expType": "Internship", "startDate": "Feb 2024", "endDate": "Present", "companyLocation": "Thane, Maharashtra, India", "type": "Remote" },
    { "title": " Full Stack Web Developer Intern", "companyName": "Innomatics Research Labs", "expType": "Internship", "startDate": "Feb 2023", "endDate": "May 2023", "companyLocation": "Hyderabad, Telangana, India", "type": "Remote" }
  ]
  return (
    <Box >
      <Box gap={7} p='10px' my='10px' justifyContent='center' alignItems='start' display='flex' flexDirection='row'>
        <Box flexBasis={'53%'}>

          <Box border="solid #dfdeda 1px" position={'relative'} backgroundColor={'#ffffff'} borderRadius={'10px'}>
            <Box>
              <Image borderTopRadius={'10px'} src={banner} alt="" />
            </Box>
            <Box border='solid white 5px' position={'absolute'} top={'100px'} left={'20px'} width={'170px'} borderRadius={'50%'}>
              <Image borderRadius={'50%'} src={profile} alt="" />

            </Box>
            <Box p={'5px'} mt={'20px'} >
              <Box px={'10px'} mx={'10px'} mt={'50px'} >
                <Text fontSize={'25px'} fontWeight={'500'}>Aditya Khade</Text>
                <Text lineHeight={1.2} width={'70%'} fontSize={'16px'}>Node JS Developer Intern @Swasth Mind | Coding Enthusiast | Full Stack Developer (MERN)</Text>
                <Text lineHeight={2} fontSize={'15px'} color={'#666666'}>Thane, Maharashtra, India</Text>
              </Box>
            </Box>
          </Box>
          <Box border="solid #dfdeda 1px" p={'5px'} my={'10px'} backgroundColor={'#ffffff'} borderRadius={'10px'}>
            <Box px={'10px'} mx={'10px'} my={'20px'}  >
              <Text fontSize={'20px'} fontWeight={'500'} >About</Text>
              <Text my={'10px'} fontSize={'14px'}>An CSE student with a passion for coding and problem-solving. Proficient in HTML, CSS, JavaScript, C, C++ and Python. Seeking opportunities to enhance my skills, gain handsome experience, and make a positive impact in tech industry</Text>

            </Box>
          </Box>
          <Box border="solid #dfdeda 1px" p={'5px'} my={'10px'} backgroundColor={'#ffffff'} borderRadius={'10px'}>
            <Box px={'10px'} mx={'10px'} my={'20px'}  >
              <Text fontSize={'20px'} fontWeight={'500'} >Experience</Text>
              <Box p={'10px'} mx={'10px'}>
                {exp.map((data, index) => (
                  <Box key={index} mb={'10px'} display={'flex'} flexDirection='column' >
                    <Text fontSize={'16px'} fontWeight={'500'}>{data.title}</Text>
                    <Text fontSize={'14px'}> {data.companyName} · {data.expType}</Text>
                    <Text fontSize={'14px'} color='#666666' > {data.startDate} - {data.endDate}</Text>
                    <Text fontSize={'14px'} color='#666666'> {data.companyLocation} · {data.type}</Text>
                    {index + 1 < exp.length && < Divider mt={'10px'} />}
                  </Box>
                ))}

              </Box>

            </Box>
          </Box>


          <Box border="solid #dfdeda 1px" p={'5px'} my={'10px'} backgroundColor={'#ffffff'} borderRadius={'10px'}>
            <Box px={'10px'} mx={'10px'} my={'20px'}  >
              <Text fontSize={'20px'} fontWeight={'500'} >Education</Text>
              <Box p={'10px'} mx={'10px'}>
                <Box display={'flex'} flexDirection='column' >
                  <Text fontSize={'16px'} fontWeight={'500'}>{edu.collegeName}</Text>
                  <Text fontSize={'14px'}> {edu.eductionType}</Text>
                  <Text fontSize={'14px'} color='#666666' > {edu.startDate} - {edu.endDate}</Text>
                  <Text fontSize={'14px'} color='#666666'> {edu.collegeAddress}</Text>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box border="solid #dfdeda 1px" p={'5px'} my={'10px'} backgroundColor={'#ffffff'} borderRadius={'10px'}>
            <Box px={'10px'} mx={'10px'} my={'20px'}  >
              <Text fontSize={'20px'} fontWeight={'500'} >Skills</Text>
              <Box p={'10px'} mx={'10px'}>
                <Collapse startingHeight={80} in={showAllSkills}>
                  {skill.map((data, index) => (
                    <Box key={index} mb={'10px'} display={'flex'} flexDirection='column' >
                      <Text fontSize={'16px'} fontWeight={'500'}>{data}-{index + 1}</Text>
                      {index + 1 < skill.length && < Divider mt={'10px'} />}
                    </Box>
                  ))}
                </Collapse>
                <Box display='flex' alignItems='center' justifyContent='center'>
                  <Button size='sm' onClick={handleToggle} mt='1rem'>
                    {showAllSkills ? "Hide some skills" : "Show all skills"}
                  </Button>
                </Box>
              </Box>

            </Box>
          </Box>

        </Box>
        <Box flexBasis={'21%'} >
          <Box  border="solid #dfdeda 1px" p={'5px'} py={'10px'} backgroundColor={'#ffffff'} rounded={10}  borderRadius={'10px'}>
            <Box px={'10px'} >
              <Text fontSize={'18px'} fontWeight={'500'}>Profile Language</Text>
              <Text fontSize={'14px'} color={'#666666'}>English</Text>
            </Box>
            <Divider mx={'auto'} width={'90%'} my={'20px'}/>
            <Box px={'10px'}>
              <Text fontSize={'18px'} fontWeight={'500'}>Public Profile & URL</Text>
              <Text fontSize={'14px'} color={'#666666'} >www.linkedin.com/in/aditya-khade-a14bb0219</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default UserProfile
