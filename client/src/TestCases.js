import React from "react";

const test_cases = [
  {
    id: 0,
    title: "First",
    preconditions: "",
    steps: "",
    expected_results: "",
    postconditions: "",
  },
  {
    id: 1,
    title: "Second",
    preconditions: "",
    steps: "",
    expected_results: "",
    postconditions: "",
  },
  {
    id: 2,
    title: "Third",
    preconditions: "",
    steps: "",
    expected_results: "",
    postconditions: "",
  },
];

class TestCases extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <MaterialTable
        title="Multiple Actions Preview"
        columns={[
          { title: "Name", field: "name" },
          { title: "Surname", field: "surname" },
          { title: "Birth Year", field: "birthYear", type: "numeric" },
          {
            title: "Birth Place",
            field: "birthCity",
            lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
          },
        ]}
        data={[
          { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
          {
            name: "Zerya Betül",
            surname: "Baran",
            birthYear: 2017,
            birthCity: 34,
          },
        ]}
        actions={[
          {
            icon: "save",
            tooltip: "Save User",
            onClick: (event, rowData) => alert("You saved " + rowData.name),
          },
          {
            icon: "delete",
            tooltip: "Delete User",
            onClick: (event, rowData) =>
              confirm("You want to delete " + rowData.name),
          },
        ]}
      />
    );
  }
}

export default TestCases;
