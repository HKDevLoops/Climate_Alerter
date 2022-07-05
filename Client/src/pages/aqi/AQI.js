import React, { useEffect } from "react";

import axios from "axios";
const AQI = () => {
  useEffect(() => {
    const Data = () => {
      const res = axios.get("http://localhost:3000/api/todo");
      console.log(res);
    };
    Data();
  }, []);
  return <div></div>;
};

export default AQI;

// Good
// rgb(19,201,28)

// Fair
// 15,134,25

// Moderate
// 201,204,13

// poor
// 204,83,13
// very poor
// 204,13,13
