import { TicketsType } from "@/types/types";
import React from "react";

interface EnhancedTableProps {
  columns: { Header: string; accessor: string }[];
  data: TicketsType[];
}

const EnhancedTable = ({ columns, data }: EnhancedTableProps) => {
  console.log("data", data);
  return <div>EnhancedTable</div>;
};

export default EnhancedTable;
