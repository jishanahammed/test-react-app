import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";

const ApiCommponents = () => {
  const [getData, setGetData] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setGetData(data.categories));
  }, []);
  return (
    <div>
      {getData.map((i) => (
        <li>{i.strCategory}</li>
      ))}
    </div>
  );
};

export default ApiCommponents;
