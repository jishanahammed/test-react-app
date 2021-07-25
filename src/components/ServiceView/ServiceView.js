import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import FakeDate from "../../DummyData/DummyDataService.json";

const ServiceView = () => {
  const { id } = useParams();
  const service = FakeDate.find((g) => g.id == id);
  return (
    <div>
      <p>{service.id} </p>
      <p>{service.title} </p>
      <p>{service.description} </p>
    </div>
  );
};

export default ServiceView;
