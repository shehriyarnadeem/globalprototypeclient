import React from "react";
import DataTable, { createTheme } from "react-data-table-component";
createTheme("solarized", {
  text: {
    primary: "#268bd2",
    secondary: "#2aa198",
  },
  background: {
    default: "#002b36",
  },
  context: {
    background: "#cb4b16",
    text: "#FFFFFF",
  },
  divider: {
    default: "#073642",
  },
  action: {
    button: "rgba(0,0,0,.54)",
    hover: "rgba(0,0,0,.08)",
    disabled: "rgba(0,0,0,.12)",
  },
});

function Home() {
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
  ];
  return (
    <div>
      <DataTable title="Arnold Movies" columns={columns} theme="solarized" />
    </div>
  );
}

export default Home;
