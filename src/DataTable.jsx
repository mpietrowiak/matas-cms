function DataTable ({ columns, data, className }) {
  const cols = [ ...columns, { title: 'Akcja'}]
  return (
    <table className={className}>
      <thead>
        <tr>
        {cols.map(column => (
          <th>{column.title}</th>
        ))}
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr>
            {columns.map(column => (
              <td>{item[column.name]}</td>
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