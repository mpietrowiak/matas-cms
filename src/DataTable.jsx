function DataTable ({ columns, data, className }) {
  const cols = [ ...columns, { title: 'Akcja'}]
  return (
    <table className={className}>
      <thead>
        <tr>
        {cols.map((column, index) => (
          <th key={index}>{column.title}</th>
        ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((column, index) => (
              <td key={index}>{item[column.name]}</td>
            ))}
            <td>
              <a href="#">Edytuj</a> &nbsp;
              <a href="#">Usuń</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DataTable;