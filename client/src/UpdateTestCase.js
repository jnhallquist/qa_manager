import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid, MenuItem } from "@material-ui/core";

import { STATUSES } from "./Constants"

class UpdateTestCase extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      form: {
        test_case_id: props.testCase.id,
        title: props.testCase.title,
        description: props.testCase.description,
        preconditions: props.testCase.preconditions,
        steps: props.testCase.steps,
        expected_results: props.testCase.expected_results,
        postconditions: props.testCase.postconditions,
        status: props.testCase.status,
      }
    }
  }

  handleClose = () => {
    this.props.onClose()
  }

  render() {
    return (
      <div>
        <DialogTitle id="form-dialog-title">Update Test Case</DialogTitle>
        <DialogContent>
        <Grid container spacing={3} alignContent="center">
          <Grid item xs={12}>
            <h3 id="new-test-case-form-header-text">New Test Case</h3>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="new-test-case-title"
              name="title"
              label="Title"
              variant="filled"
              value={this.state.form.title}
              onChange={this.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="new-test-case-description"
              name="description"
              label="Description"
              variant="filled"
              multiline
              rows={2}
              value={this.state.form.description}
              onChange={this.handleChange}
              shrink={false}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="new-test-case-preconditions"
              name="preconditions"
              label="Preconditions"
              variant="filled"
              multiline
              rows={4}
              value={this.state.form.preconditions}
              onChange={this.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="new-test-case-steps"
              name="steps"
              label="Steps"
              variant="filled"
              multiline
              rows={6}
              value={this.state.form.steps}
              onChange={this.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="new-test-case-expected-results"
              name="expected_results"
              label="Expected Results"
              variant="filled"
              multiline
              rows={4}
              value={this.state.form.expected_results}
              onChange={this.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="new-test-case-postconditions"
              name="postconditions"
              label="Postconditions"
              variant="filled"
              multiline
              rows={4}
              value={this.state.form.postconditions}
              onChange={this.handleChange}
              fullWidth
            />
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
                {STATUSES.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary">
            Subscribe
          </Button>
        </DialogActions>
    </div>
    );
  }
}

export default UpdateTestCase;
