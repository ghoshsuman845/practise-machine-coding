import DEFAULT_ROWS from "../data.js";
import React, { useState } from "react";
import Table from "./Table/index.jsx";

const PaginatedStaticTable = () => {
  const [rows, setRows] = useState(DEFAULT_ROWS);
  const COLUMNS = [
    {
      header: "ID",
      accessorKey: "id",
      width: "10%",
    },
    {
      header: "User Id",
      accessorKey: "userId",
      width: "10%",
    },
    {
      header: "Type",
      accessorKey: "type",
      width: "10%",
      accessorFn: (data) => (
        <span
          style={{
            background: `${data.type === "active" ? "lightBlue" : "#e2e2e2"} `,
            padding: "5px 10px",
            width: "50%",
            borderRadius: "8px",
          }}
        >
          {data.type}
        </span>
      ),
    },
    {
      header: "Title",
      accessorKey: "title",
      width: "40%",
    },
    {
      header: "Actions",
      accessorFn: (data) => (
        <button
          style={{
            padding: "10px",
            cursor: "pointer",
          }}
          onClick={() => handleDeleteUser(data.id)}
        >
          ╳
        </button>
      ),
      width: "30%",
    },
  ];

  function handleDeleteUser(id) {
    const newRows = rows.filter((row) => row.id !== id);
    setRows(newRows);
  }
  return (
    <Table
      header={{
        title: "User Data",
      }}
      actions={{
        onSearch: (e) => {
          const searchQuery = e.target.value;
          const newRows = [...DEFAULT_ROWS].filter((row) =>
            row.title.includes(searchQuery)
          );
          setRows(newRows);
        },
        onFilter: () => {},
        otherActions: (
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Filter
          </button>
        ),
      }}
      columns={COLUMNS}
      rows={rows}
      pagination={true}
      pageSize={10}
      placeholder={"no data found"}
    />
  );
};

export default PaginatedStaticTable;
