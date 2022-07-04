import { Table,TableBody, TableContainer, TableHead, TableRow, TableCell } from '@mui/material'
import{Paper} from '@mui/material'
import React from 'react'
import "./table.scss"

const TableUtil = ({data}) => {
    const currData=data
  const products = require('../../Assets/DummyData/products.json')
  const getProduct = (id) => {
    let currProd=products.filter((product) => {
      return product.id === parseInt(id) 
    })
    console.log(currProd)
    return currProd[0]
  }
  return (
    <TableContainer component={Paper} className="table">
          <Table sx={{minWidth:650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Order Value</TableCell>
            <TableCell className="tableCell">Order Date</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
                  {currData.map((row) => (
                          <TableRow key={row.tracking_id}>
                              <TableCell className="tableCell"> {row.tracking_id}
                      </TableCell>
                      < TableCell className="tableCell"><div className='cell_wrapper'><img src={getProduct(row.ProductID).image} className="image" />{getProduct(row.ProductID).title}</div> </TableCell>
                      <TableCell className="tableCell">$ {row.value}</TableCell>
                              <TableCell className="tableCell">{row.OrderedOn}</TableCell>
                              <TableCell className="tableCell"><span className={`status ${row.Status}`} >{row.Status}</span></TableCell>
                          </TableRow>
                      )
                  )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableUtil