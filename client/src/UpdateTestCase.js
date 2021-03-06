import React from "react";
import axios from "axios";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogContent from "@material-ui/core/DialogContent";
import { withStyles, Grid, MenuItem } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";

import { STATUSES } from "./Constants";

const styles = withStyles((theme) => ({
  dialogContent: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 100,
      marginBottom: 100
    },
    overflow: "hidden"
  },
  title: {
    flex: 1
  }
}));

class UpdateTestCase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        test_case_id: props.testCase.id,
        title: props.testCase.title,
        description: props.testCase.description,
        preconditions: props.testCase.preconditions,
        steps: props.testCase.steps,
        expected_results: props.testCase.expected_results,
        postconditions: props.testCase.postconditions,
        status: props.testCase.status
      }
    };
  }

  handleClose = () => {
    this.props.onClose();
  };

  handleChange = (event) => {
    const formState = Object.assign({}, this.state.form);
    formState[event.target.name] = event.target.value;
    this.setState({ form: formState });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put(
        `http://localhost:3001/test_cases/${this.state.form.test_case_id}`,
        this.state.form
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <AppBar>
          <Toolbar>
            <IconButton
              id="close-dialog-button"
              edge="start"
              color="inherit"
              onClick={this.handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Update Test Case
            </Typography>
            <Button autoFocus color="inherit" onClick={this.handleSubmit}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <DialogContent className={classes.dialogContent}>
          <Grid container spacing={3} alignContent="center">
            <Grid item xs={12}>
              <TextField
                id="test-case-title"
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
                id="test-case-description"
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
                id="test-case-preconditions"
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
                id="test-case-steps"
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
                id="test-case-expected-results"
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
                id="test-case-postconditions"
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
                  id="test-case-status"
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
      </div>
    );
  }
}

export default styles(UpdateTestCase);
