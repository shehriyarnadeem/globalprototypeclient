import React, { useEffect, useState } from "react";
import HttpService from "../../HttpService";
import DataTable, { createTheme } from "react-data-table-component";

function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUsers() {
      const result = await HttpService.get("/users");
      if (result) {
        console.log(result, "result");
      }
    }
  }, []);
  const columns = [
    {
      name: "Title",
      selector: "title",
      sortable: true,
    },
    {
      name: "Year",
      selector: "year",
      sortable: true,
      right: true,
    },
    {
      name: "Year",
      selector: "year",
      sortable: true,
      right: true,
    },
  ];
  const data = [{ id: 1, title: "Conan the Barbarian", year: "1982" }];
  return (
    <div>
      <DataTable
        title="List of users"
        columns={columns}
        data={data}
        theme="solarized"
      />
    </div>
  );
}

createTheme("solarized", {
  text: {
    primary: "#268bd2",
    secondary: "#2aa198",
  },
  // background: {
  //   default: "#002b36",
  // },
  context: {
    background: "#cb4b16",
    text: "#FFFFFF",
  },
  // divider: {
  //   default: "#073642",
  // },
  action: {
    button: "rgba(0,0,0,.54)",
    hover: "rgba(0,0,0,.08)",
    disabled: "rgba(0,0,0,.12)",
  },
});

export default Home;
