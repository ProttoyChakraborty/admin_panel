import React from 'react'
import "./featuredCharts.scss"

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer ,Label} from 'recharts';

const FeaturedCharts = () => {

    const data = [
        { name: 'Payment Completed', value:1000 },
        { name: 'Payment Not Completed', value: 300 },
    ];
    const colors=["#82ca9d","#8884d8"]
  return (
      <div className='featuredChart'>
          <div className="top">
              <h1 className="title">Total Revenue</h1>
              <MoreVertIcon/>
          </div>
          <div className="mid">
                  <PieChart width={400} height={200}>
                  <Pie data={data} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} nameKey="name">
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]}/>
                        ))
                      }
                   <Label position="center" className='pieChartlabel'>72%</Label>
                    </Pie>
                  </PieChart>
              <div className="sales">
                  <span>Sales made this week</span>
                  <h1>$567.90</h1>
              </div>
          </div>
          <div className="bottom">
              <div className="box">
                  <span>Target</span>
                  <h3>$1200</h3>
              </div>
              <div className="box">
                  <span>Last week</span>
                  <h3>$980</h3>
              </div>
          </div>
         
      </div>
  )
}

export default FeaturedCharts