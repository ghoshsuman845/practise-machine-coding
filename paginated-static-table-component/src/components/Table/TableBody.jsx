const TableBody = ({ rows, columns }) => {
  const getCellData = (row, col) => {
    const { accessorFn, accessorKey } = col;
    if (accessorFn) {
      return accessorFn(row);
    } else {
      return row[accessorKey];
    }
  };
  return (
    <tbody>
      {rows.length > 0
        ? rows.map((row) => {
            return (
              <tr key={row.id}>
                {columns?.map((col, index) => {
                  return (
                    <td key={index} width={col.width}>
                      {getCellData(row, col)}
                    </td>
                  );
                })}
              </tr>
            );
          })
        : null}
    </tbody>
  );
};

export default TableBody;
