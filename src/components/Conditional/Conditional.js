import React, { useState } from "react";
const Conditional = () => {
  const [show, setShow] = useState(true);

  const handleMove = () => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  return (
    <div>
      {show === true ? <h1>false </h1> : <h1>True </h1>}
      <button
        onClick={() => handleMove()}
        type="button"
        className="btn btn-secondary btn-sm"
      >
        Click Me
      </button>
    </div>
  );
};

export default Conditional;
