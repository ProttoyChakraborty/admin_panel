import React,{useState,useEffect} from 'react'
import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';

const Datatable = ({ Data, columns}) => {
  const actionColumn = [{
    field: "action", headerName: "Action", width: 200,
    renderCell: () => {
      return (<div className="cellAction">
        <button className='viewButton'>View</button>
        <button className='deleteButton'>Delete</button>
      </div>
      )
  }}
    
  ]
  
  // const [Data, setData] = useState([]);
  // useEffect(() => {
  //   getData()
  // }, []);
  // async function getData() {
  //   const response = await fetch('../../Assets/DummyData/users.json')
  //   if (!response.ok) {
  //     throw new Error("Can't fetch users!!!")
  //   }
  //   else {
  //     const res = await response.json();
  //     console.log(res)
  //     setData(res)
  //   }
   
  // }
    return (
      <div className="datatable">
         <div style={{ height:"100%", width: '100%' }}>
        <DataGrid
        rows={Data}
        columns={columns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[5]}
      />
    </div>
          
      </div>
    )
}

export default Datatable;
