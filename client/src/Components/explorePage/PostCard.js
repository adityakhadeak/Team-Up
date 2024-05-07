import { Box, Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Heading, IconButton, Button, Image, Text, Divider, FormLabel, Input, FormControl, InputGroup, InputLeftElement, InputRightElement, Container, ScaleFade, SlideFade } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { BsThreeDotsVertical, BsThreeDots, BsEmojiSmile } from 'react-icons/bs'
import { BiChat, BiLike, BiShare } from 'react-icons/bi'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
const PostCard = () => {
    const [liked, setLiked] = useState(false)
    const [showEmojiPicker, setShowEmojiPicker] = useState(false)
    const emojiPickerRef = useRef(null);

    const [numberOfComment, setNumberOfComment] = useState(3)
    const [numberOfLikes, setNumberOfLikes] = useState(30)

    const [comment, setComment] = useState('')

    const handleComment = (value) => {
        setComment(value)
    }
    const addEmoji = (emoji) => {
        setComment(comment + emoji)
    }

    const [comments, setComments] = useState([])
    const postComment = () => {
        setNumberOfComment(numberOfComment+1)
        setComment('')
        const newComment=[...comments,{ username: 'Aditya Khade', description: 'Hello how are u what are tus adngad', comment }]
        setComments(newComment)
    }

    useEffect(() => {

        function handleClickOutside(event) {
            const excludedDiv = document.getElementById('excludedDivId'); // Replace 'excludedDivId' with the id of the div you want to exclude

            if (excludedDiv && !excludedDiv.contains(event.target)) {

                if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target)) {
                    setShowEmojiPicker(false);
                }
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    

    return (
        <Card maxW='2xl'>
            <CardHeader>
                <Flex spacing='4'>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

                        <Box>
                            <Heading size='sm'>Aditya Khade</Heading>
                            <Text>Full Stack Developer</Text>
                        </Box>
                    </Flex>
                    <IconButton
                        variant='ghost'
                        colorScheme='gray'
                        aria-label='See menu'
                        icon={<BsThreeDotsVertical />}
                    />
                </Flex>
            </CardHeader>
            <CardBody>
                <Text>
                    With Chakra UI, I wanted to sync the speed of development with the speed
                    of design. I wanted the developer to be just as excited as the designer to
                    create a screen.
                </Text>
            </CardBody>
            <Image
                py='5px'
                objectFit='cover'
                src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                alt='Chakra UI'
            />
            <Flex justifyContent='space-between' mx={'auto'} py='5px' width={'90%'} fontSize={'13px'} color={'#666666'} borderBottom='solid #e8e8e8 0.5px'  >
                <Flex alignItems='center'>
                    <Text >
                        {liked ? numberOfLikes + 1 : numberOfLikes} likes
                    </Text>
                </Flex>
                <Flex alignItems='center'>
                    <Text >
                        {numberOfComment} comments
                    </Text>
                </Flex>

            </Flex>
            <CardFooter
                py={'6px'}
                justify='space-between'
                flexWrap='wrap'

            >
                <Box width='100%' display='flex' justifyContent='space-evenly'>
                    <Button onClick={() => { setLiked(!liked) }} color={liked ? '#378fe9' : ''} flex='1' variant='ghost' leftIcon={<BiLike />}>
                        Like
                    </Button>
                    <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
                        Comment
                    </Button>
                    <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
                        Share
                    </Button>
                </Box>

                <Box my={'10px'} width={'100%'}>
                    <Box width={'100%'} alignItems='center' gap={'2'} display='flex' flexDirection='row'>
                        <Avatar size='sm' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        <FormControl width='100%' isRequired>
                            <InputGroup position={'relative'}>
                                {showEmojiPicker && <Box ref={emojiPickerRef} bottom={'45px'} right={0} position={'absolute'} zIndex={100} >

                                    <Picker data={data} onEmojiSelect={(e) => addEmoji(e.native)} />
                                </Box>}
                                <Input onChange={(e) => handleComment(e.target.value)} value={comment} rounded='10px' placeholder='Add a comment' />
                                <InputRightElement pointerEvents='all'>
                                    <BsEmojiSmile id='excludedDivId' cursor={'pointer'} onClick={() => { setShowEmojiPicker(!showEmojiPicker) }} fontSize={'20px'} />
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                    </Box>
                    {comment.length !== 0&&<Container>
                        <SlideFade in={comment.length !== 0} transition={{ duration: '1s' }}>
                            <Button
                                m={'5px'}
                                p='5px'
                                size='xs'
                                isDisabled={comment.match(/^\s*$/)}
                                colorScheme='blue'
                                onClick={() => { postComment(comment) }}
                            >
                                Post
                            </Button>
                        </SlideFade>
                    </Container>}
                </Box>
                <Box width='100%' display='flex' flexDirection='column' >
                    {
                        comments.map((comment, index) => (
                            <Box my='10px' key={index} width='100%' gap={1} display='flex' alignItems='start' flexDirection='row'>

                                <Avatar size='sm' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                <Box width='100%' rounded='10px' px='10px' py='7px' bgColor='#f2f2f2' display='flex' flexDirection='column'>
                                    <Box display={'flex'} flexDirection={'row'}>
                                        <Box>
                                            <Text color='black' fontWeight={600} fontSize='14px'>Aditya Khade</Text>
                                            <Text color='#616161' fontSize='12px'>Node JS Developer Intern @Swasth Mind | Coding Enthusiast | Full Stack Developer (MERN)</Text>

                                        </Box>
                                        <Box>
                                            <IconButton
                                                variant='ghost'
                                                colorScheme='gray'
                                                aria-label='See menu'
                                                icon={<BsThreeDots />}
                                            />
                                        </Box>
                                    </Box>
                                    <Box my='10px'>
                                        <Text color='black' fontSize='14px' >{comment.comment}</Text>
                                    </Box>

                                </Box>
                            </Box>

                        ))
                    }

                </Box>
            </CardFooter>
        </Card>
    )
}

export default PostCard
