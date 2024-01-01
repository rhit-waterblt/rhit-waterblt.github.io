import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
// import theme from './Theme';
import { pdfjs } from 'react-pdf';

// If you use Webpack, import the worker as a script:
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

const theme = extendTheme({
  colors: {
    brand: {
      text: "#282828",
      primary: "7DF9FF",
      secondary: '#EAF4FF',
      accent: '#00A693',
      background: '#F8F8FF',
      secondaryBackground: '#FFFFFF'
    },
  },
})

// const theme = extendTheme({
//   colors: {
//     brand: {
//       text: "#E5E5E5",
//       primary: "#ad51cf",//"#48BB78",
//       secondary: "#372040",//'#345B63',
//       accent: '#00A693',
//       background: '#36313D',
//       secondaryBackground: '#484349'
//     },
//   },
// })

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
