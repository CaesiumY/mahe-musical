import { TicketsType } from "@/types/types";
import React, { useMemo, useRef } from "react";
import MaterialTable from "@material-table/core";

interface EnhancedTableProps {
  data: TicketsType[];
}

const EnhancedTable = ({ data }: EnhancedTableProps) => {
  const columns = useMemo(
    () => [
      { title: "name", field: "name" },
      { title: "contact", field: "contact" },
      { title: "email", field: "email" },
      { title: "musicalDate", field: "musicalDate" },
      {
        title: "limitedAt",
        field: "limitedAt",
        render: (rowData: TicketsType) =>
          new Date(rowData.limitedAt.seconds * 1000)
            .toLocaleString()
            .slice(5, -3),
      },
      { title: "status", field: "status" },
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
      }}
    />
  );
};

export default EnhancedTable;
