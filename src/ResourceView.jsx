import DataTable from './DataTable.jsx';
import useResource from './hooks/useResource.jsx';

const ResourceView = ({ resource }) => {
  const colData = {
    posts: [
      { name: 'id', title: 'ID' },
      { name: 'title', title: 'Tytuł'},
      { name: 'content', title: 'Treść'}
    ],
    todos: [
      { name: 'id', title: 'ID' },
      { name: 'content', title: 'Treść'}
    ]
  }
  const columns = colData[resource];
  const [items] = useResource(resource);
  return (
    <div>
      <DataTable 
        columns={columns} 
        data={items} 
        className='table'
      />
    </div>
  )
}

export default ResourceView;