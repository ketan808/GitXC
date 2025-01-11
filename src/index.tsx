import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, MantineProvider, CSSVariablesResolver, rem, ColorSchemeScript } from '@mantine/core';
import {BrowserRouter} from 'react-router-dom';
import '@mantine/core/styles.css';

const themeOverride = createTheme({

  
  other: {
    heroHeight: rem(400),
    light0:'#FFFFFF',
    light80:'#D3D7DF',
    light90:'#E1EEEF',
    light100:'#F2F9FC',
    dark80:'#31363F',

    dark90:'#1e2126',

    dark100:'#090A0B',
    
    dark0:'#121212',

    green1: '#51cf66',
    green2: '#0F8122',

    yellow1: '#fab005',
    yellow2: '#C35423',

    red1: '#fa5252',
    red2: '#DE2C2C',

    blue1: '#339af0',
    blue2: '#0E75CB',

  },
  

  headings: {
    fontFamily: 'greycliff-cf, sans-serif',
    sizes: {
      h1: { fontSize: rem(60) },
    },
  },

  fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'cyan',

});




const resolver: CSSVariablesResolver = (theme) => ({


  variables: {
    '--mantine-hero-height': theme.other.heroHeight,
  },

  

  dark: {
    '--mantine-color-Indicator': theme.other.light80,
    '--mantine-fontcolor-0': theme.other.light0,

    '--mantine-color-80': theme.other.dark80,
    '--mantine-color-90': theme.other.dark90,
    '--mantine-color-100': theme.other.dark0,


    '--mantine-color-dark-6': theme.other.dark80,

    '--mantine-color-green-1': theme.other.green1,
    '--mantine-color-yellow-1': theme.other.yellow1,
    '--mantine-color-red-1': theme.other.red1,
    '--mantine-color-blue-1': theme.other.blue1,




  },

  light: {
    '--mantine-color-Indicator': theme.other.dark80,
    '--mantine-fontcolor-0': theme.other.dark0,

    '--mantine-color-80': theme.other.light90,
    '--mantine-color-90': theme.other.light0,
    '--mantine-color-100': theme.other.light100,
    

    '--mantine-color-gray-0': theme.other.light90,

    '--mantine-color-green-1': theme.other.green2,
    '--mantine-color-yellow-1': theme.other.yellow2,
    '--mantine-color-red-1': theme.other.red2,
    '--mantine-color-blue-1': theme.other.blue2,

  },


});



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    
    <ColorSchemeScript defaultColorScheme="dark" />
    <MantineProvider
      defaultColorScheme="dark"
      theme={themeOverride}
      cssVariablesResolver={resolver}
    >

   <BrowserRouter>
   <App />
   </BrowserRouter>

  </MantineProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

