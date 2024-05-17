import { Box, Card, CardBody, CardHeader, Heading, Icon, Stack, StackDivider, Text } from '@chakra-ui/react'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Route, Routes } from 'react-router-dom';
import AccntPref from './accountPreferences/AccntPref.js';
import SettingLeftSideLayout from '../../Layouts/SettingsLeftSideLayout';
import SignInAndSecurity from './signInAndSecurity.js/SignInAndSecurity.js';
import Notifications from './notifications.js/Notifications.js';
import ProfileVisibility from './profileVisibility/ProfileVisibility.js';


const RightSide = () => {
  return (
    <Routes>
      <Route path='/' element={<SettingLeftSideLayout />}>
        <Route path='account' element={<AccntPref />} />
        <Route path='sign-in-and-security' element={<SignInAndSecurity />} />
        <Route path='profile-visibility' element={<ProfileVisibility />} />
        <Route path='notifications' element={<Notifications />} />

      </Route >
    </Routes>
  )
}

export default RightSide
