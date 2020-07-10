import React from "react";
import MaterialTable from "material-table";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

const test_cases = [
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

class TestCases extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <MaterialTable
        title="All Test Cases"
        columns={[
          { title: "Title", field: "title" },
          { title: "Description", field: "description" },
          { title: "Status", field: "status" },
        ]}
        data={test_cases}
        actions={[
          {
            icon: () => <EditIcon />,
            tooltip: "Edit Test Case",
            onClick: (event, rowData) => alert("You saved " + rowData.name),
          },
          {
            icon: () => <DeleteIcon />,
            tooltip: "Delete Test Case",
            onClick: (event, rowData) =>
              alert("You want to delete " + rowData.name),
          },
        ]}
        options={{
          search: false,
        }}
      />
    );
  }
}

export default TestCases;
