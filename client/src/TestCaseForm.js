import React from 'react';
import axios from 'axios';

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
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input name="title" type="text" value={this.state.form.title} onChange={this.handleChange.bind(this)} />
        </label>
        <label>
          Preconditions:
          <textarea name="preconditions" value={this.state.form.preconditions} onChange={this.handleChange.bind(this)} />
        </label>
        <label>
          Steps:
          <textarea name="steps" value={this.state.form.steps} onChange={this.handleChange.bind(this)} />
        </label>
        <label>
          Expected Results:
          <textarea name="expectedResults" value={this.state.form.expectedResults} onChange={this.handleChange.bind(this)} />
        </label>
        <label>
          Postconditions:
          <textarea name="postconditions" value={this.state.form.postconditions} onChange={this.handleChange.bind(this)} />
        </label>
        <label>
          Status:
          <select name="status" value={this.state.form.status} onChange={this.handleChange.bind(this)}>
            <option value="Untested">Untested</option>
            <option value="passed">Passed</option>
            <option value="failed">Failed</option>
            <option value="blocked">Blocked</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default TestCaseForm
