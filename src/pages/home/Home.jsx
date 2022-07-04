import React from 'react'
import Charts from '../../utils/charts/Charts'
import FeaturedCharts from '../../utils/featured/FeaturedCharts'
import Navbar from '../../utils/navbar/Navbar'
import Sidebar from '../../utils/sidebar/Sidebar'
import Widget from '../../utils/widget/Widget'
import "./Home.scss"


const home_chart_data= [
  { month: "January", sales: 10033 },
  { month: "February", sales: 14321 },
  { month: "March", sales: 8900 },
  { month: "April", sales: 10400 },
];

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className='container'>
      <Navbar />
        <div className="homeContainer">
          <div className="widgets">
            <Widget type="Users" />
            <Widget type="Orders"/>
            <Widget type="Sales"/>
            <Widget type="Profits"/>
          </div>
          <div className="charts-container">
            <FeaturedCharts />
            <Charts heading="Sales" color="#8884d8" data={home_chart_data} aspect_ratio={2/1}/>
          </div>
      </div>
      </div>
     
     
      
    </div>
   
  )
}

export default Home