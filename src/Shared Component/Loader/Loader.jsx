import React from "react";
import {  PropagateLoader } from "react-spinners";

const Loader = ({ size = 50, color = "#36d7b7"}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <PropagateLoader  color={color} size={size} />
     
    </div>
  );
};

export default Loader;
