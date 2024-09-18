import TableDescription from "./TableDescription";
import TableActions from "./TableActions";
import TableContainer from "./TableContainer";
import BaseTable from "./BaseTable";

const Table = ({
  header,
  actions,
  columns,
  rows,
  pagination,
  pageSize,
  placeholder,
}) => {
  return (
    <TableContainer>
      {header ? <TableDescription {...header} /> : null}
      {actions ? <TableActions {...actions} /> : null}
      {columns.length > 0 ? (
        <BaseTable
          columns={columns}
          rows={rows}
          pageSize={pageSize}
          placeholder={placeholder}
        />
      ) : null}
    </TableContainer>
  );
};

export default Table;
