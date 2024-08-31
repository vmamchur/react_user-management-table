import { FC } from "react";

interface ITableHeaderProps {
  columns: string[];
}

const TableHeader: FC<ITableHeaderProps> = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={column}>{column}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
