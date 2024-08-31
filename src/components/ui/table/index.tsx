import { FC } from "react";

import TableHeader from "./table-header";
import TableRow from "./table-row";

import styles from "./styles.module.scss";

interface ITableProps {
  columns: string[];
  data: Record<string, string>[];
}

const Table: FC<ITableProps> = ({ columns, data }) => {
  return (
    <table className={styles.table}>
      <TableHeader columns={columns} />
      <tbody>
        {data.map((row, i) => (
          <TableRow key={i} data={row} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
