import React from "react";
import Dialog from "@material-ui/core/Dialog";
import MUIDataTable from "mui-datatables";

import axios from "axios";

import UpdateTestCase from "./UpdateTestCase";

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
];

class TestCases extends React.Component {
  constructor() {
    super();

    this.state = {
      test_cases: [],
      dialog_open: false,
      dataIndex: null
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/test_cases").then((response) => {
      const test_cases = response.data;
      this.setState({ test_cases });
    });
  }

  handleClick = (rowData, rowMeta) => {
    this.setState({
      dialog_open: true,
      dataIndex: rowMeta.dataIndex
    });
  };

  handleClose = () => {
    this.setState({ dialog_open: false });
  };

  options = {
    download: false,
    print: false,
    viewColumns: false,
    onRowClick: this.handleClick
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

        <Dialog
          fullScreen
          open={this.state.dialog_open}
          onClose={this.handleClose}
          fullWidth={true}
          aria-labelledby="form-dialog-title"
        >
          <UpdateTestCase
            onClose={this.handleClose}
            testCase={this.state.test_cases[this.state.dataIndex]}
          />
        </Dialog>
      </div>
    );
  }
}

export default TestCases;
