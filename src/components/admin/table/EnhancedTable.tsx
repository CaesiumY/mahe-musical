import { TableDataType, TicketsType } from "@/types/types";
import React, { useMemo } from "react";
import MaterialTable, { Column } from "@material-table/core";

interface EnhancedTableProps {
  data: TableDataType[];
}

const EnhancedTable = ({ data }: EnhancedTableProps) => {
  const makeLocaleDate = (sec: number) =>
    new Date(sec * 1000).toLocaleString().slice(5, -3);

  const columns: Column<TableDataType>[] = useMemo(
    () => [
      { title: "id", field: "id" },
      { title: "name", field: "name" },
      { title: "contact", field: "contact" },
      { title: "email", field: "email" },
      {
        title: "limitedAt",
        field: "limitedAt",
        render: (rowData: TableDataType) =>
          makeLocaleDate(rowData.limitedAt.seconds),
        customFilterAndSearch: (term: string, rowData: TableDataType) =>
          makeLocaleDate(rowData.limitedAt.seconds).indexOf(term) !== -1,
      },
      {
        title: "status",
        field: "status",
        lookup: {
          waiting: "waiting",
          confirmed: "confirmed",
          cancelRequest: "cancelRequest",
          cancelled: "cancelled",
          unknown: "unknown",
        },
      },
    ],
    []
  );

  return (
    <MaterialTable
      columns={columns}
      data={data}
      options={{
        sorting: true,
        filtering: true,
        paging: false,
      }}
    />
  );
};

export default EnhancedTable;
