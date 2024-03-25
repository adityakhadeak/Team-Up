import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { RegistrationContextProvider } from './Context/RegistrationContext.js';
import { NavFixedContextProvider } from './Context/NavFixedContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavFixedContextProvider>
      <RegistrationContextProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </RegistrationContextProvider>
    </NavFixedContextProvider>
  </React.StrictMode>
);

