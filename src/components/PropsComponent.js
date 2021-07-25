import React from "react";

const PropsComponent = (props) => {
  const handleMove = (FakeDate) => {
    console.log(FakeDate);
  };
  return (
    <div>
      <div className="row">
        {props.FakeDate.map((FakeDate) => (
          <div className="col-4">
            <h3> {FakeDate.title}</h3>

            <button
              onClick={() => handleMove(FakeDate)}
              type="button"
              classname="btn btn-secondary btn-sm"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* {<h1>my name is:{props.service.title}</h1>} */}

      {/* <NewComp title={props.service.title}></NewComp> */}
    </div>
  );
};

export default PropsComponent;
