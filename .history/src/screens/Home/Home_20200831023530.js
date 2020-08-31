import React, { useEffect, useState } from "react";
import HttpService from "../../HttpService";
import DataTable, { createTheme } from "react-data-table-component";

function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUsers() {
      const result = await HttpService.get("/users");
      if (result) {
        setUsers(result.data.data);
      }
    }
    getUsers();
  }, []);

  console.log(users);
  const columns = [
    {
      name: "ID",
      selector: "id",
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
      right: true,
    },
  ];
  const data = users;
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
