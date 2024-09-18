const TableHead = ({ columns }) => {
  return (
    <thead key={columns.length}>
      {columns.length > 0 ? (
        <tr>
          {columns?.map((col) => {
            return (
              <th key={col.accessorKey} width={col.width}>
                {col.header}
              </th>
            );
          })}
        </tr>
      ) : null}
    </thead>
  );
};

export default TableHead;
