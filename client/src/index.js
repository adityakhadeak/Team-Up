import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { AuthContextProvider } from './Context/AuthContext.js';
import { NavFixedContextProvider } from './Context/NavFixedContext.js';
import { UserDataContextProvider } from './Context/UserDataContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavFixedContextProvider>
      <UserDataContextProvider>
        <AuthContextProvider>
          <ChakraProvider>
            <App />
          </ChakraProvider>
        </AuthContextProvider>
      </UserDataContextProvider>
    </NavFixedContextProvider>
  </React.StrictMode>
);

