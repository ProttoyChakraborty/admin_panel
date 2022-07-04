import React from 'react'
import Datatable from '../../utils/Datatable/Datatable'
import Navbar from '../../utils/navbar/Navbar'
import Sidebar from '../../utils/sidebar/Sidebar'
import "./list.scss"
import { columns } from '../../Datasources/Userdatasource'

const List = ({Datatype}) => {
  var data;
  var columnsDef;
  switch (Datatype) {
    case 'users':
      columnsDef = columns;
      data = require('../../Assets/DummyData/users.json');
      break;
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