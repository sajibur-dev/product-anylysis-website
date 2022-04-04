import React, { useEffect, useState } from "react";
import RevenueChart from "../components/RevenueChart";
import SellChart from "../components/SellChart";
import Styles from "../Module/Dashboard.module.css";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("chart.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div className={Styles.chart_container}>
      <SellChart data={data} />
      <RevenueChart data={data}/>
    </div>
  );
};

export default Dashboard;
