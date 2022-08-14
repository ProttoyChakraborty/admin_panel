import React from 'react'
import Datatable from '../../utils/Datatable/Datatable'
import Navbar from '../../utils/navbar/Navbar'
import Sidebar from '../../utils/sidebar/Sidebar'
import{Link} from 'react-router-dom'
import "./list.scss"
import { userColumns,productColumns } from '../../Datasources/listdatasource'

const List = ({Datatype}) => {
  var data;
  var columnsDef;
  var addText;
  var heading;
  switch (Datatype) {
    case 'users':
      heading = 'Users';
      addText="Add User"
      columnsDef = userColumns;
      data = require('../../Assets/DummyData/users.json');
      break;
    case 'products':
      heading = 'Products';
      addText="Add Product"
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
        <div className="headContainer">
        <h1>{heading}</h1>
        <Link to={window.location.pathname + "/new"} style={{ textDecoration: "none", color: "white" }}>
          <button className='addButton'>{addText}</button>
          </Link>
        </div>
        <Datatable Data={data} columns={columnsDef} />
      </div>
    </div>
  )
}

export default List