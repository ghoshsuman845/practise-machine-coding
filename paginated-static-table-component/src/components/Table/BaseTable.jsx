import TableHead from "./TableHead";
import TableBody from "./TableBody";

const BaseTable = ({ columns, rows, pageSize, placeholder }) => {
  return (
    <div className="table-wrapper">
      <table>
        <TableHead columns={columns} />
        <TableBody rows={rows} columns={columns} />
        {rows.length < 1 && <div>{placeholder}</div>}
      </table>
    </div>
  );
};

export default BaseTable;
