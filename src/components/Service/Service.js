import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import FakeDate from "../../DummyData/DummyDataService.json";
const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(FakeDate);
  }, []);
  // console.log(url);

  const history = useHistory();

  const handleMove = (id) => {
    const url = `/serviceView/${id}`;
    history.push(url);
  };
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="service-titel">
            <h2> Ouer Service</h2>
          </div>
        </div>
        {services.map((service) => (
          <div className="col-lg-4 col-md-6">
            <div className="service">
              <div className="service-icon">
                <img src={service.img} alt="" />
              </div>
              <div className="service-info">
                <h3> {service.title}</h3>
                <p>{service.description}</p>
                <button
                  onClick={() => handleMove(service.id)}
                  type="button"
                  class="btn btn-secondary btn-sm"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
