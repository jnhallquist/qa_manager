import React from "react";
import Dialog from '@material-ui/core/Dialog';
import MUIDataTable from "mui-datatables";

import axios from "axios";

import UpdateTestCase from "./UpdateTestCase";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

// const [open, setOpen] = React.useState(false);

const columns = [
  {
    name: "title",
    label: "Title",
    options: {
      filter: false,
    },
  },
  {
    name: "description",
    label: "Description",
    options: {
      filter: false,
    },
  },
  {
    name: "status",
    label: "Status",
    options: {
      filter: true,
    },
  },
];

const options = {
  download: false,
  print: false,
  viewColumns: false
};

class TestCases extends React.Component {
  constructor() {
    super();

    this.state = {
      test_cases: [],
      dialog_open: false
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/test_cases").then((response) => {
      const test_cases = response.data;
      this.setState({ test_cases });
    });
  }

  handleClickOpen = () => {
    this.setState({dialog_open: true})
  };

  handleClose = () => {
    this.setState({dialog_open: false})
  };

  options = {
    download: false,
    print: false,
    viewColumns: false,
    onRowClick: this.handleClickOpen
  };

  render() {
    return (
      <div>
      <MUIDataTable
        title={"All Test Cases"}
        data={this.state.test_cases}
        columns={columns}
        options={this.options}
      />

      <Dialog open={this.state.dialog_open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <UpdateTestCase onClose={this.handleClose} />
      </Dialog>
      </div>
    );
  }
}

export default TestCases;
