import { Text, Box, GridItem, Grid, Image } from '@chakra-ui/react';
import userimg from '../../Images/dashboarduserprof.png';
import { Link } from 'react-router-dom';

const Dashboarduser = () => {
  return (
    <Grid fontFamily={'Raleway'} height={'100%'} templateRows={'auto'} templateColumns={{ base: '1fr', md: '1fr 2fr' }}>
      <GridItem>
        <Box height='100%' display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box width={{ base: '80%', md: '50%' }} height='600px' rounded='md' bg='white' padding='3px' my='20px' borderRadius='10px'>
            <Box w="100%" alignItems="center" textAlign="center">
              <Image alignItems="center" src={userimg} alt='User Profile' />
            </Box>
            <Box display="flex" flexDirection="column">
              <Text textAlign="left" color="grey" fontSize="17px">Work experience</Text>
              <Box >
                <Text fontStyle='Bold'>Innomatics reasearch Labs</Text>
                <Text>Web Developer</Text>
                <Text>Telangana,Hyderabad,India</Text>
              </Box>
              <Box >
                <Text fontStyle='Bold'>CodeClause</Text>
                <Text>Web Designer</Text>
                <Text>Mumbai,India</Text>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column">
              <Text textAlign="left" color="grey" fontSize="17px">Skills</Text>
              <Box >
                <Text>UI/UX</Text>
                <Text>HTML,CSS,JAVASCRIT</Text>
                <Text>REACT JS,NODE JS,MONGO DB</Text>
                <Text>C,C++,Java</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </GridItem>
      <GridItem>
        <Box height='100%' display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box width={{ base: '80%', md: '50%' }} height='600px' rounded='md' bg='white' padding='35px' my='20px' borderRadius='10px'>
            <Box>
              <Box display="flex">
                <Text fontWeight="bold" px="12px">Sahil chaudhari</Text>
                <Text color="gray" fontSize="10px" textAlign="center">Panvel</Text>
              </Box>
              <Box>
                <Text color="blue">Web Developer</Text>
              </Box>
            </Box>
            <Box>
              <Text color="grey" fontWeight="bold">Project Experience</Text>
              <ul>
                <li>
                <Box>
                  <Text>Project 1</Text>
                  <Text>A project description outlines the details of one project, including all its phases and processes involved, in a single document. It addresses the problem that initiated the project and the desired goals and objectives. But it doesn't have to stop there.</Text>
                </Box>
                </li>
                <li><Box>
                  <Text>Project 2</Text>
                  <Text>A project description outlines the details of one project, including all its phases and processes involved, in a single document. It addresses the problem that.</Text>
                </Box>
                </li>
                <li>
                <Box>
                  <Text>Project 3</Text>
                  <Text>A project description outlines the details of one project, including all its phases and processes involved, in a single document.</Text>
                </Box>
                </li>
              </ul>
            </Box>
            <Box>
              <Text fontWeight="bold" color="grey">Contact information</Text>
                <ul>
                  <li>
              <Box display="flex">
                <Text fontWeight='bold'>Phone No:</Text>
                <Text>+91 987067907</Text>
              </Box>
              </li>
              <li>
              <Box display="flex">
                <Text fontWeight='bold'>Email:</Text>
                <Text>Sahilchaudhari2412@gmail.com</Text>
              </Box>
              </li>
              <li>
              <Box display="flex">
                <Text fontWeight='bold'>Address:</Text>
                <Text>Cosmo society,sec-7,new panvel</Text>
              </Box>
              </li>
              <li>
              <Box display="flex">
                <Text fontWeight='bold'>Website:</Text>
                <Text><Link to="https://sahilchaudhari-746.github.io/Sahil-Chaudhari-SC-Personal-Website/">Personal Portfolio</Link></Text>
              </Box>
              </li>
              </ul>
            </Box>
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Dashboarduser;
