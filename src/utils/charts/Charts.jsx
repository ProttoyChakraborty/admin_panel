import React from "react";
import "./charts.scss";
import {
  ResponsiveContainer,
  AreaChart,
  linearGradient,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";

const Charts = ({heading,color,data,aspect_ratio}) => {
  
  return (
      <div className="chart">
          <h1 className="title">
              {heading}
        </h1>
      <ResponsiveContainer className="chartbox" aspect={aspect_ratio}>
        <AreaChart
          width={730}
          height={265}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color} stopOpacity={0.8} />
              <stop offset="95%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" className="grid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="sales"
            stroke={color}
            fillOpacity={1}
            fill="url(#color)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
