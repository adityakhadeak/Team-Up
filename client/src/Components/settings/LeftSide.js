import { Avatar, Box, IconButton, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdAccountCircle,MdLockPerson, MdNotifications, MdVisibility } from "react-icons/md";

const LeftSide = () => {
    const location=useLocation()
    console.log(location.pathname)
    const [activeSetting, setactiveSetting] = useState('')
    const handleActiveSetting=(setting)=>{
        setactiveSetting(setting)
    }
    return (
        <Box  display='flex' flexDirection={'column'}  gap={8}>
            <Box p='15px' gap={2} display='flex' flexDirection={'row'} alignItems='center'>
                <Avatar size='sm' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                <Text fontSize='30px' fontWeight='600'>Settings</Text>
            </Box>
            <Box  fontSize='20px' fontWeight='500' gap={8} display='flex' flexDirection={'column'} >
                <Box onClick={()=>handleActiveSetting('Account Preferences')} color={location.pathname.startsWith('/settings/account')?'  #0a66c2 ':'black'} borderRight={location.pathname.startsWith('/settings/account')?' solid #0a66c2 3px':''} px='10px' gap={2} display='flex' flexDirection={'row'} alignItems='center'>
                    <IconButton
                        variant='ghost'
                        fontSize='30px'
                        color={location.pathname.startsWith('/settings/account')?'  #0a66c2 ':'black'}                        aria-label='See menu'
                        icon={<MdAccountCircle />}
                    />
                    <Link to={'account'}  fontWeight='400'>Account Preferences</Link>
                </Box>
                <Box onClick={()=>handleActiveSetting('Sign & Security')} color={location.pathname.startsWith('/settings/sign-in-and-security')?'  #0a66c2 ':'black'} borderRight={location.pathname.startsWith('/settings/sign-in-and-security')?' solid #0a66c2 3px':''}  px='10px' gap={2} display='flex' flexDirection={'row'} alignItems='center'>
                    <IconButton
                        variant='ghost'
                        fontSize='30px'
                        color={location.pathname.startsWith('/settings/sign-in-and-security')?'  #0a66c2 ':'black'}                        aria-label='See menu'
                        icon={<MdLockPerson />}
                    />
                    <Link to={'sign-in-and-security'} fontSize='30px' fontWeight='400'>Sign & Security</Link>
                </Box>
                <Box to={'profile-visibility'}  onClick={()=>handleActiveSetting('Visibility')} color={location.pathname.startsWith('/settings/profile-visibility')?'  #0a66c2 ':'black'} borderRight={location.pathname.startsWith('/settings/profile-visibility')?' solid #0a66c2 3px':''}  px='10px' gap={2} display='flex' flexDirection={'row'} alignItems='center'>
                    <IconButton
                        variant='ghost'
                        fontSize='30px'
                        color={location.pathname.startsWith('/settings/profile-visibility')?'  #0a66c2 ':'black'}                        aria-label='See menu'
                        icon={<MdVisibility />}
                    />
                    <Link to={'profile-visibility'}  fontWeight='400'>Visibility</Link>
                </Box>
                <Box onClick={()=>handleActiveSetting('Notifications')} color={location.pathname.startsWith('/settings/notifications')?'  #0a66c2 ':'black'} borderRight={location.pathname.startsWith('/settings/notifications')?' solid #0a66c2 3px':''}  px='10px' gap={2} display='flex' flexDirection={'row'} alignItems='center'>
                    <IconButton
                        variant='ghost'
                        fontSize='30px'
                        color={location.pathname.startsWith('/settings/notifications')?'  #0a66c2 ':'black'}                        aria-label='See menu'
                        icon={<MdNotifications />}
                    />
                    <Link to={'notifications'}  fontWeight='400'>Notifications</Link>
                </Box>
            </Box>
        </Box>
    )
}

export default LeftSide
