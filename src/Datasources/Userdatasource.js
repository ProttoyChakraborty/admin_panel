
import { capitaliseFirst } from "../JsUtils";

export const columns = [
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
  
  