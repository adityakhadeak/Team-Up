import { Box, Card, CardBody, CardHeader, Heading, Icon, Stack, StackDivider, Text } from '@chakra-ui/react'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Route, Routes } from 'react-router-dom';
import SettingLeftSideLayout from '../../Layouts/SettingsLeftSideLayout';
import SignInAndSecurity from './signInAndSecurity.js/SignInAndSecurity.js';
import Notifications from './notifications.js/Notifications.js';
import ProfileVisibility from './profileVisibility/ProfileVisibility.js';
import ProfileInfo1 from './accountPreferences/ProfileInfo1.js';
import Skills from './accountPreferences/Skills.js';
import DisplayMode from './accountPreferences/DisplayMode.js';
import CloseAccount from './accountPreferences/CloseAccount.js';
import Email from './signInAndSecurity.js/Email.js';
import Phone from './signInAndSecurity.js/Phone.js';
import ChangePassword from './signInAndSecurity.js/ChangePassword.js';
import AccntPref from './accountPreferences/AccntPref.js';


const RightSide = () => {
  return (
    <Routes>
      <Route path='/' element={<SettingLeftSideLayout />}>
        <Route path='account/' element={<AccntPref />} />
        <Route path='account/profileinfo1' element={<ProfileInfo1 />} />
        <Route path='account/skills' element={<Skills />} />
        <Route path='account/darkmode' element={<DisplayMode />} />
        <Route path='account/closeaccount' element={<CloseAccount />} />
        
        <Route path='sign-in-and-security' element={<SignInAndSecurity />} />
        <Route path='sign-in-and-security/manage-email' element={<Email />} />
        <Route path='sign-in-and-security/manage-phone' element={<Phone />} />
        <Route path='sign-in-and-security/change-password' element={<ChangePassword />} />
        <Route path='profile-visibility' element={<ProfileVisibility />} />
        <Route path='notifications' element={<Notifications />} />

      </Route >
    </Routes>
  )
}

export default RightSide
