import React, { useState } from "react";
import { Box, Text, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FaSearch } from "react-icons/fa";
import { Button } from "@chakra-ui/react";

const FindProject = () => {
    const [isButtonActive, setIsButtonActive] = useState(false);

    const handleButtonClick = () => {
        setIsButtonActive(!isButtonActive);
    };

    return (
        <Box height='100%' display='flex' justifyContent='center' alignItems='center'>
            <Box width={{ base: '100%', md: '70%' }} height='600px' rounded='md' bg='white' padding='35px' my='20px' >
                <Text as='h1' fontSize='30px' fontWeight='bold' >Find a Project</Text>
                <Text color='gray'> Search for project that you're interested in. You can filter by project type, requirement, deadline, and location</Text>
                <InputGroup>
                    <InputLeftElement pointerEvents="none">
                        <FaSearch color="gray.300" />
                    </InputLeftElement>
                    <Input height='45px' type="text" placeholder="Search for a keyword" variant="filled" />
                </InputGroup>
                <Box display='flex' justifyContent='space-around'>
                    <Box width='50%'>
                        <Button my='16px' width='4rem' height='1.5rem' borderRadius='20px' colorScheme={isButtonActive ? "blue" : "gray"} onClick={handleButtonClick}>
                            All
                        </Button>
                    </Box>
                    <Box>
                        <Button my='16px' width='4rem' height='1.5rem' borderRadius='20px' colorScheme={isButtonActive ? "blue" : "gray"} onClick={handleButtonClick}>
                            Software developement
                        </Button>
                    </Box>
                    <Box>
                        <Button my='16px' width='4rem' height='1.5rem' borderRadius='20px' colorScheme={isButtonActive ? "blue" : "gray"} onClick={handleButtonClick}>
                            Dara Science
                        </Button>
                    </Box>
                    <Box>
                        <Button my='16px' width='4rem' height='1.5rem' borderRadius='20px' colorScheme={isButtonActive ? "blue" : "gray"} onClick={handleButtonClick}>
                            Design
                        </Button>
                    </Box>
                    <Box>
                        <Button my='16px' width='100 %' height='1.5rem' borderRadius='20px' colorScheme={isButtonActive ? "blue" : "gray"} onClick={handleButtonClick}>
                            Writing
                        </Button>
                    </Box>
                    <Box>
                        <Button my='16px' width='4rem' height='1.5rem' borderRadius='20px' colorScheme={isButtonActive ? "blue" : "gray"} onClick={handleButtonClick}>
                            Marketing
                        </Button>
                    </Box>
                    <Box>
                        <Button my='16px' width='4rem' height='1.5rem' borderRadius='20px' colorScheme={isButtonActive ? "blue" : "gray"} onClick={handleButtonClick}>
                            Video Production
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default FindProject;
