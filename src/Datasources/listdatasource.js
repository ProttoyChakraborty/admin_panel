
import { capitaliseFirst } from "../JsUtils";

 const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
              <img classname="profile" src={params.row.img} alt=""/>
             <div>{params.row.name.firstname} { params.row.name.lastname}</div>
          </div>
         
        )
      }
    },
    {field:'username',headerName:"Username",width: 160},
    {
      field:'email',headerName:"Email",width: 200
    },
    {
      field: 'location', headerName: "Location", width: 230,
      renderCell: (params)=>{
        return (
          <div className="loc">
            <span>{capitaliseFirst(params.row.address.street)} , {capitaliseFirst(params.row.address.city)}</span>
          </div>
        )
      }
    },
    {
      field:'phone',headerName:"Contact Number",width: 160
    },
];
  
const productColumns =[
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'product',
      headerName: 'Product',
      width: 250,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img classname="profile" src={params.row.image} alt="" />
            <div className="product-container">
            <h3>{params.row.title}</h3>
            </div>
           
          </div>
         
        )
      }
    },
    {field:'price',headerName:"Price (in USD $)",width: 160},
    {
      field:'stock',headerName:"Stock",width:160
    },
    {
      field: 'rating', headerName: "Rating", width: 230,
      renderCell: (params)=>{
        return (
          <div className="loc">
            <span>{params.row.rating.rate}</span>
          </div>
        )
      },
      options: {
        filter:true,
        sort: true
      }
    },
    {
      field:'category',headerName:"Category",width: 160
    },

]
  
export {userColumns,productColumns}