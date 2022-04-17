/* eslint-disable react/jsx-key */
import { TicketsType } from "@/types/types";
import React from "react";
import { Column, useTable } from "react-table";

interface EnhancedTableProps {
  columns: Column<TicketsType>[];
  data: TicketsType[];
}

const EnhancedTable = ({ columns, data }: EnhancedTableProps) => {
  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table
      {...getTableProps()}
      style={{ border: "solid 1px blue" }}
      className="m-auto"
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: "solid 3px red",
                  background: "aliceblue",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "solid 1px gray",
                      background: "papayawhip",
                    }}
                  >
                    {/* {cell.render("Cell")} */}
                    <button
                      onClick={() => {
                        const data = cell.render("Cell");
                        console.log("data :>> ", data);
                      }}
                    >
                      {typeof cell.value === "string"
                        ? cell.value
                        : new Date(
                            parseInt(
                              Object.values(cell.value).slice(0, 1).join(""),
                              10
                            ) * 1000
                          ).toLocaleDateString()}
                    </button>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default EnhancedTable;
