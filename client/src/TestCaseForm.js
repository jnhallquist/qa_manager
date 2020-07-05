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
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  },
  contentRight: {
    textAlign: 'right'
  },
  contentCenter: {
    textAlign: 'center'
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
        expected_results: '',
        postconditions: '',
        status: ''
      }
    };

  }

  handleChange = (event) => {
    const formState = Object.assign({}, this.state.form)
    formState[event.target.name] = event.target.value
    this.setState({form: formState})
  }

  handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3001/test_cases', this.state.form)
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
        <Grid container spacing={3} alignContent="center">
          <Grid item xs={12} className={classes.contentCenter}>
            <h3 id="new-test-case-form-header-text">New Test Case</h3>
          </Grid>
          <Grid item xs={12}>
            <TextField id="new-test-case-title" name="title" label="Title" variant="filled" value={this.state.form.title} onChange={this.handleChange} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField id="new-test-case-preconditions" name="preconditions" label="Preconditions" variant="filled" multiline rows={4} value={this.state.form.preconditions} onChange={this.handleChange} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField id="new-test-case-steps" name="steps" label="Steps" variant="filled" multiline rows={4} value={this.state.form.steps} onChange={this.handleChange} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField id="new-test-case-expected-results" name="expected_results" label="Expected Results" variant="filled" multiline rows={4} value={this.state.form.expected_results} onChange={this.handleChange} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField id="new-test-case-postconditions" name="postconditions" label="Postconditions" variant="filled" multiline rows={4} value={this.state.form.postconditions} onChange={this.handleChange} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={6}>
              <TextField
                id="new-test-case-status"
                name="status"
                select
                label="Status"
                value={this.state.form.status}
                onChange={this.handleChange}
                fullWidth
              >
                {statuses.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.contentRight}>
            <Button id="new-test-case-submit-btn" className={classes.button} variant="contained" onClick={this.handleSubmit}>Submit</Button>
          </Grid>
        </Grid>
      </Paper>
      </div>
    );
  }
}

export default styles(TestCaseForm)
