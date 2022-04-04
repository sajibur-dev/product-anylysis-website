import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import Styles from '../Module/SellChart.module.css';




const SellChart = ({ data }) => {
  return (
    <div className={Styles.chart_container}>
      <h2 className={Styles.chart_title}>Month wise sell</h2>
      <LineChart
        width={400}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default SellChart;
