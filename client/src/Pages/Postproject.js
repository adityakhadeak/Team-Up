import { Box, Button, FormControl, FormLabel, Input, Text, Textarea, Stack, Tag, TagCloseButton, TagLabel, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

const PostProj = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(1);
  const [skillInput, setSkillInput] = useState('');
  const [skills, setSkills] = useState([]);
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const projectData = {
      title,
      description,
      duration,
      skills
    };

    try {
      const response = await fetch('http://localhost:4000/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      });

      if (response.ok) {
        toast({
          title: "Project submitted.",
          description: "Your project has been submitted successfully.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        // Reset form inputs
        setTitle('');
        setDescription('');
        setDuration(1);
        setSkills([]);
        setSkillInput('');
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      toast({
        title: "Submission failed.",
        description: "There was an error submitting your project.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleSkillInputChange = (e) => {
    setSkillInput(e.target.value);
  };

  const handleAddSkill = () => {
    if (skillInput.trim() !== '') {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput('');
    }
  };

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <Box height="100%" display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Box width={{ base: '80%', md: '50%' }} height="auto" rounded="md" bg="white" padding="35px" my="20px">
        <Text as="h1" fontSize="30px" fontWeight="bold">Post a project</Text>
        <form onSubmit={handleSubmit}>
          <FormControl p="2px" my="5px">
            <FormLabel>Title</FormLabel>
            <Input
              border="1px"
              backgroundColor="#f0f2f5"
              borderColor="black"
              placeholder="Write a descriptive title for your project"
              py="25px"
              variant="outline"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>
          <FormControl p="2px" my="5px">
            <FormLabel>Description</FormLabel>
            <Textarea
              placeholder="Describe your project in detail. What are you looking to achieve? What will be deliverables be?"
              backgroundColor="#f0f2f5"
              borderColor="black"
              py="25px"
              variant="outline"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              h="8rem"
            />
          </FormControl>
          <FormControl p="2px" my="5px">
            <FormLabel>Skills required</FormLabel>
            <Stack direction="row" mb="10px">
              <Input value={skillInput} onChange={handleSkillInputChange} placeholder="Enter a skill" />
              <Button onClick={handleAddSkill} colorScheme="blue">Add</Button>
            </Stack>
            <Stack direction="row" wrap="wrap">
              {skills.map((skill, index) => (
                <Tag size="md" key={index} borderRadius="full" variant="solid" colorScheme="blue" mb="5px">
                  <TagLabel>{skill}</TagLabel>
                  <TagCloseButton onClick={() => handleRemoveSkill(skill)} />
                </Tag>
              ))}
            </Stack>
          </FormControl>
          <FormControl p="2px" my="5px">
            <FormLabel>Project Duration (in months)</FormLabel>
            <NumberInput step={1} defaultValue={1} min={1} max={12} value={duration} onChange={(valueString) => setDuration(parseInt(valueString))}>
              <NumberInputField border="1px" backgroundColor="#f0f2f5" borderColor="black" placeholder="Project duration" py="25px" variant="outline" type="text" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <Box display="flex" justifyContent={'center'} alignItems={'center'} width="100%" py="10px" my="20px">
            <Button width="100%" height="45px" borderRadius="10px" colorScheme="linkedin" type="submit">Submit</Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default PostProj;
