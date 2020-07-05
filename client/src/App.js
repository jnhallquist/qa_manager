import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import TestCaseForm from './TestCaseForm'

function App() {
  const theme = createMuiTheme({
    palette: {
      type: 'dark'
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <TestCaseForm />
    </ThemeProvider>
  );
}

export default App;
