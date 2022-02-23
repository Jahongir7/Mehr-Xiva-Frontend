import { useState } from 'react';
import CompanyStory from './Company';
import UpdateStory from './UpdateStory';

export default function CompanyIndex() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(null);
  const handleEdit = (data, id) => {
    setId(id);
    setData(data);
  };
  const handleShow = (bool) => {
    setId(bool);
    console.log(bool);
  };
  return (
    <div>
      {id ? <UpdateStory defaultData={data} handleShow={handleShow} /> : ''}
      <CompanyStory handleEdit={handleEdit} />
    </div>
  );
}
