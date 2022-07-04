import "./widget.scss"
import React from 'react'
import ArrowUpward from "@mui/icons-material/ArrowUpward";
import GroupIcon from '@mui/icons-material/Group';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Widget = ({ type }) => {
  let data;
  switch (type) { 
    case "Users":
      data = {
        title: "Users",
        isCurrency: false,
        count: 36,
        text: "See all Users",
        growth: 20,
        icon: (<GroupIcon classname="icon" style={{ color: "blue",backgroundColor:"lightblue",borderRadius:"20%",border:"1px solid blue"}}/>),
        
      }
      break;
    case "Orders": {
      data = {
        title: "Orders",
        isCurrency: false,
        count:121,
        text: "See all Orders",
        growth: -5,
        icon: (<LocalShippingIcon classname="icon" style={{ color: "darkgoldenrod",backgroundColor:"lightyellow",borderRadius:"20%",border:"1px solid darkgoldenrod"}}/>),
       
      }
    }
      break;
      case "Sales": {
        data = {
          title: "Sales",
          isCurrency: true,
          count:10445,
          text: "View Sales",
          growth: 10,
          icon: (<AttachMoneyIcon classname="icon" style={{ color: "green",backgroundColor:"lightgreen",borderRadius:"20%",border:"1px solid green"}} />),
          
        }
      }
      break;
      case "Profits": {
        data = {
          title: "Profits",
          isCurrency: true,
          count:2331,
          text: "Profit history",
          growth:-15,
          icon: (<AlignVerticalBottomIcon classname="icon" style={{ color: "crimson",backgroundColor:"pink",borderRadius:"20%",border:"1px solid crimson"}}/>),
          
        }
      }
      break;
    default:
      break;

  }
  return (
    <div className="widget-container">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isCurrency ? <>{(data.count).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</>
            :<>{(data.count)}</>}
        </span>
        <span className="bottom-text">{ data.text}</span>
      </div>
      <div className="right">
        <div className="percentage">
          {data.growth > 0? 
            <div className="positive">
            <ArrowUpward/>
              {data.growth}%
            </div> :
            <div className="negative">
            <ArrowDownwardIcon/>
              {(-1)*data.growth}%
            </div>}
        </div>
        <div className="icon_box">
          {data.icon}
        </div>
      </div>
    </div>
  )
}

export default Widget