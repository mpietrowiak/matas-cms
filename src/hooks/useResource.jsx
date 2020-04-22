import { useState, useEffect } from 'react';
import axios from 'axios';

function useResource(resource) {
  const [items, setItems] = useState([]);
  const resUrl = `/api/${resource}`;

  const deleteItem = async (item) => {
    setItems(items.filter(tx => tx.id !== item.id));
    const response = await axios.delete(`${resUrl}/${item.id}`);
  }

  const upsertItem = async (item) => {
    try {
      const response = await axios.post(`${resUrl}`, item);
      setItems([...items, {...item, id: response.data.id}]);
    } catch (error) {
      // todo toast ?
    }
  }

  useEffect(() => {
    (async () => {
      setItems(
        (await axios(resUrl)).data
      );
    })();
  }, [resource]);

  return [items, upsertItem, deleteItem];
}

export default useResource;