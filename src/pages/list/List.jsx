import React from 'react'
import Datatable from '../../utils/Datatable/Datatable'
import Navbar from '../../utils/navbar/Navbar'
import Sidebar from '../../utils/sidebar/Sidebar'
import "./list.scss"
import { userColumns,productColumns } from '../../Datasources/listdatasource'

const List = ({Datatype}) => {
  var data;
  var columnsDef;
  switch (Datatype) {
    case 'users':
      columnsDef = userColumns;
      data = require('../../Assets/DummyData/users.json');
      break;
    case 'products':
      columnsDef = productColumns;
      data = require('../../Assets/DummyData/products.json');
   default:
      break;

  }
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable Data={data} columns={columnsDef} />
      </div>
    </div>
  )
}

export default List