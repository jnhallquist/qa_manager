import React from "react";
import MUIDataTable from "mui-datatables";

import axios from "axios";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const columns = [
  {
    name: "title",
    label: "Title",
    options: {
      filter: false
    }
  },
  {
    name: "description",
    label: "Description",
    options: {
      filter: false
    }
  },
  {
    name: "status",
    label: "Status",
    options: {
      filter: true
    }
  }
]

const data = [
  {
    id: 0,
    title: "Verify user can login",
    description: "dankdandna",
    preconditions: "",
    steps: "",
    expected_results: "",
    postconditions: "",
    status: "Untested",
  },
  {
    id: 1,
    title: "Verify user can reset password",
    description: "dajiejeiifw",
    preconditions: "",
    steps: "",
    expected_results: "",
    postconditions: "",
    status: "Blocked",
  },
  {
    id: 2,
    title: "Verify user can create new account",
    description: "dajiojiaidjai",
    preconditions: "",
    steps: "",
    expected_results: "",
    postconditions: "",
    status: "Pass",
  },
];

const options = {
  download: false,
  print: false,
  viewColumns: false
}

class TestCases extends React.Component {
  constructor() {
    super();

    this.state = {
      test_cases: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:3001/test_cases").then((response) => {
      const test_cases = response.data;
      this.setState({ test_cases })
    });
  }

  render() {
    console.log(123, this.state)
    return (
      <MUIDataTable
        title={"All Test Cases"}
        data={this.state.test_cases}
        columns={columns}
        options={options}
      />
    );
  }
}

export default TestCases;
