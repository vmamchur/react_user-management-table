import { FC } from "react";

import styles from './styles.module.scss';

interface ITableHeaderProps {
  columns: string[];
}

const TableHeader: FC<ITableHeaderProps> = ({ columns }) => {
  return (
    <thead className={styles.tableHeader}>
      <tr>
        {columns.map((column) => (
          <th key={column}>{column}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
