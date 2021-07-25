import React from "react";
import ApiCommponents from "../ApiCommponents/ApiCommponents";
import Conditional from "../Conditional/Conditional";
import DataBinding from "../DataBunding/DataBinding";
import ListsandKeys from "../ListsandKeys/ListsandKeys";
import NavBar from "../NavBar/NavBar";
import Service from "../Service/Service";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Slider></Slider>
        <div className="divder-section"> </div>
        <Service></Service>
      </div>

      <br />
      <br />

      <div className="text-center">
        <h2>Conditional Rendering </h2>
        <Conditional />
      </div>
      <br />
      <br />

      <div className="">
        <h2 className="text-center"> Data Binding in React </h2>
        <DataBinding></DataBinding>
      </div>

      <br />
      <br />

      <div className="">
        <h2 className="text-center"> Lists and Keys </h2>
        <ListsandKeys></ListsandKeys>
      </div>

      <br />
      <br />

      <div className="text-center">
        <h2 className="text-center"> API </h2>
        <ApiCommponents />
      </div>

      <br />
      <br />
    </div>
  );
};

export default Home;
