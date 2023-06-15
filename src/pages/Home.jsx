import React from "react";
import Sidebar from "../components/Sidebar";
import Statistic from "./Statistic";
import CMS from "../pages/CMS";
const Home = () => {
  return (
    <>
      <Sidebar />
      <div className="p-4 sm:ml-64">
        <Statistic />
        <br></br>
        <CMS />
      </div>
    </>
  );
};

export default Home;
