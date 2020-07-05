import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { purple } from '@material-ui/core/colors'

import TestCaseForm from './TestCaseForm'

function App() {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        light: purple[100],
        main: purple[200],
        dark: purple[500]
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <TestCaseForm />
    </ThemeProvider>
  );
}

export default App;
