import { FC } from "react";

import TableHeader from "./table-header";
import TableRow from "./table-row";

interface ITableProps {
  columns: string[];
  data: Record<string, string>[];
}

const Table: FC<ITableProps> = ({ columns, data }) => {
  return (
    <table>
      <TableHeader columns={columns} />
      <tbody>
        {data.map((row) => (
          <TableRow key={row.id} data={row} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
