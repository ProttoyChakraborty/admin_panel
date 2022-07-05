import React from 'react'
import "./single-user.scss"
import Navbar from '../../utils/navbar/Navbar'
import Sidebar from '../../utils/sidebar/Sidebar'
import TableUtil from '../../utils/Table/TableUtil'
import Charts from '../../utils/charts/Charts'
import { useParams } from 'react-router-dom'
import { capitaliseFirst } from '../../JsUtils'
// icons import

import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';


const user_chart_data=[{ month: "January", sales: 10033 },
{ month: "February", sales: 14321 },
{ month: "March", sales: 8900 },
  { month: "April", sales: 10400 },]

const Single = ({ type }) => {
  let params = useParams();
  switch (type) {
    case "user":
      console.log("User", type)
      const data = require('../../Assets/DummyData/users.json')
      const currUser = data.filter((user) => {
        return user.id == parseInt(params.userid);
      })
      const purchaseData=require('../../Assets/DummyData/user-transaction.json')
      console.log(purchaseData);
      return (
        <div className="single">
          <Sidebar />
          <div className="Container">
            <Navbar />
            <div className="singleContainer">
              <div className="top">
                <div className="info">
                <div className="left">
                  <h1 className="title">{currUser[0].name.firstname} {currUser[0].name.lastname}</h1>
                  <img className="userImg" src={currUser[0].img} />
                </div>
                  <div className="middle">
                    <div className='edit-button'><button>Edit</button></div> 
                  <span><LocationOnIcon className='icon' />  {capitaliseFirst(currUser[0].address.street)},{capitaliseFirst(currUser[0].address.city)}</span>
                  <span><LocalPhoneIcon className='icon' />  {currUser[0].phone}</span>
                  <span><EmailIcon className='icon' />  {currUser[0].email}</span>
                  <span><PersonIcon className='icon' />  {currUser[0].username}</span>
                  </div>
                  </div>
                <div className="right">
                  <Charts heading="Purchase Value" color="#82ca9d" data={user_chart_data} aspect_ratio={2/0.73}/>
                </div>
              </div>
              <div className="bottom">
                <div className="tablediv">
                <TableUtil data={ purchaseData}/>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      )
      break;
    default:
      return (<div>Default</div>)
  }
  
}

export default Single