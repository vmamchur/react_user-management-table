import { FC } from "react";

interface ITableRowProps {
  data: Record<string, string>;
}

const TableRow: FC<ITableRowProps> = ({ data }) => {
  return (
    <tr>
      {Object.entries(data).map(([key, value]) => (
        <td key={key}>{value}</td>
      ))}
    </tr>
  );
};

export default TableRow;
