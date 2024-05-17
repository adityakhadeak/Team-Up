import { Box, Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Heading, IconButton, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { BiChat, BiLike, BiShare } from 'react-icons/bi'
import PostCard from './PostCard'

const MiddleBottom = () => {
    const posts =[
        {name:"Aditya Khade",work:"Full Stack Developer"},
        {name:"Sahil Chaudhari",work:"Full Stack Developer"},
        {name:"Om Waje",work:"Frontend Developer"},
        {name:"Aryan Okate",work:"Backend Developer"},
        {name:"Chaitya",work:"Software Developer"},
    ]
    return (
        <Box px='10px'>
         {
           posts.map((post,index)=>(
            <Box my='10px'>
                <PostCard key={index} name={post.name} work={post.work}/>
            </Box>
           ))
         }
        </Box>
    )
}

export default MiddleBottom
