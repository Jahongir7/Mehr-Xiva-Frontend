/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MaterialTable from 'material-table';
import { deleteCompany, getCompany, updateCompany } from '../redux/actions/adminActions';

const ChildTable = () => {
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.adminReducer.companies);
  let cCompanies = [];

  if (companies && companies.length > 0) {
    cCompanies = [...companies];
  }
  console.log(cCompanies);
  const [columns, setColumns] = useState([
    { title: 'Ismi', field: 'name' },
    { title: 'Manzil', field: 'director', initialEditValue: 'initial edit value' },
    { title: "Tug'ilgan sana", field: 'companyPhone' },
    {
      title: 'Telefon',
      field: 'accountantPhone'
    }
  ]);

  const [data, setData] = useState(cCompanies);

  return (
    <MaterialTable
      title="Umumiy ro'yhat"
      columns={columns}
      data={data}
      editable={{
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);
              dispatch(updateCompany(newData, oldData._id));
              dispatch(getCompany());
              resolve();
            }, 100);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              dispatch(deleteCompany(oldData._id));
              dispatch(getCompany());
              resolve();
            }, 100);
          })
      }}
    />
  );
};

export default ChildTable;
