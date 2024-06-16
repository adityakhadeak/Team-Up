import {
  Box, Text, List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Collapse,
  Button,
} from '@chakra-ui/react'
import React from 'react'

const RightSide = () => {
  const [show, setShow] = React.useState(false)

  const handleToggle = () => setShow(!show)
  const allNews = [
    { headline: "Fewer takers for personal loans" },
    { headline: "Luxury brands charm buyers" },
    { headline: "How firms can attract top talent" },
    { headline: "CEO pay surges post-pandemic" },
    { headline: "More funds for tech startups" },
    { headline: "Smaller cities tap into e-mobility" },
    { headline: "Placement woes persist at IITs" },
    { headline: "Fantasy gaming scores big at IPL" },
    { headline: "Fintech funding slows down" },
    { headline: "irms eye more women skilled in AI" }
  ]
  const getNews = () => {

  }
  return (
    <Box padding='10px' display='flex' justifyContent='center' alignItems='center'>
      <Box p='15px' my='10px' width='300px' display='flex' flexDirection='column' justifyContent='start' alignItems='center' height='-moz-max-content' borderRadius='8px' bgColor='#ffffff'>
        <Box width='100%' >
          <Text fontWeight='600' fontSize='17px' textAlign='start'>TeamUp News</Text>
        </Box>
        <Box my='10px'>
          <Collapse startingHeight={230} in={show}>
            <UnorderedList>
              {
                allNews.map((news, index) => (
                  <Box key={index}>
                    <ListItem  fontWeight='500' fontSize='15px'>{news.headline}</ListItem>
                    <Box lineHeight='3px' color='#666666' fontSize='12px' as='span'>3d ago</Box>
                  </Box>
                ))
              }
            </UnorderedList>
          </Collapse>
          <Button size='sm' onClick={handleToggle} mt='1rem'>
            Show {show ? 'Less' : 'More'}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default RightSide
