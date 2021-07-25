import React, { useEffect, useState } from "react";

const LocaleTimeAndDate = () => {
  const [services, setServices] = useState();
  console.log(services);
  useEffect(() => {
    // setInterval(() => {
    //   setServices(new Date().toLocaleTimeString());
    // }, 1000);
  });
  return (
    <div>
      <span>{new Date().toLocaleTimeString()}</span>
    </div>
  );
};

export default LocaleTimeAndDate;
