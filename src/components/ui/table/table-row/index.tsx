import { FC } from "react";

import styles from './styles.module.scss';

interface ITableRowProps {
  data: Record<string, string>;
}

const TableRow: FC<ITableRowProps> = ({ data }) => {
  return (
    <tr className={styles.tableRow}>
      {Object.entries(data).map(([key, value]) => (
        <td key={key}>{value}</td>
      ))}
    </tr>
  );
};

export default TableRow;
