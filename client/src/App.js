import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { purple } from '@material-ui/core/colors'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

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
      <Router>
        <Link to="/new_test_case">Create Test Case</Link>

        <Switch>
          <Route path="/new_test_case">
            <TestCaseForm />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
