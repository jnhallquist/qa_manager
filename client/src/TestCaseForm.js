import React from 'react';
import axios from 'axios';

import { withStyles, Paper, Grid, TextField, MenuItem, Button } from '@material-ui/core';

const statuses = [
  {
    value: 'Untested',
    label: 'Untested'
  },
  {
    value: 'Passed',
    label: 'Passed'
  },
  {
    value: 'Failed',
    label: 'Failed'
  },
  {
    value: 'Blocked',
    label: 'Blocked'
  }
]

const styles = withStyles((theme) => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  }
}));

class TestCaseForm extends React.Component {
  constructor() {
    super();

    this.state = {
      form: {
        title: '',
        preconditions: '',
        steps: '',
        expectedResults: '',
        postconditions: '',
        status: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const formState = Object.assign({}, this.state.form)
    formState[event.target.name] = event.target.value
    this.setState({form: formState})
  }

  handleSubmit(event) {
    event.preventDefault();

    axios.post('http://localhost:3001/test_cases', {
      title: this.state.form.title,
      preconditions: this.state.form.preconditions,
      steps: this.state.form.steps,
      expected_results: this.state.form.expectedResults,
      postconditions: this.state.form.postconditions,
      status: this.state.form.status
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.layout}>
      <Paper className={classes.paper}>
        <Grid container xs={6} alignContent="center">
          <Grid item xs={12}>
            <TextField id="new-test-case-title" label="Title" variant="filled" value={this.value} onChange={this.handleChange.bind(this)} fullWidth />
          </Grid>
          <Grid item>
            <TextField id="new-test-case-preconditions" label="Preconditions" variant="filled" multiline rows={4} value={this.value} onChange={this.handleChange.bind(this)} />
          </Grid>
          <Grid item>
            <TextField id="new-test-case-steps" label="Steps" variant="filled" multiline rows={4} value={this.value} onChange={this.handleChange.bind(this)} />
          </Grid>
          <Grid item>
            <TextField id="new-test-case-expected-results" label="Expected Results" variant="filled" multiline rows={4} value={this.value} onChange={this.handleChange.bind(this)} />
          </Grid>
          <Grid item>
            <TextField id="new-test-case-postconditions" label="Postconditions" variant="filled" multiline rows={4} value={this.value} onChange={this.handleChange.bind(this)} />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="new-test-case-status"
              select
              label="Status"
              value={this.value}
              onChange={this.handleChange.bind(this)}
            >
              {statuses.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={this.handleSubmit}>Submit</Button>
          </Grid>
        </Grid>
      </Paper>
      </div>
    );
  }
}

export default styles(TestCaseForm)
