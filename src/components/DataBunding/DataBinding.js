import React, { useState } from "react";

const DataBinding = () => {
  const [input, setInput] = useState({ name: "", phone: "", email: "" });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };
  const [inputList, setInputList] = useState([]);
  const handleAdd = () => {
    setInputList([...inputList, input]);
    setInput({
      name: "",
      phone: "",
    });
    console.log(inputList);
  };
  return (
    <div>
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <form>
                <div class="form-group">
                  <label>Name: </label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    value={input.name}
                    onChange={handleChange}
                  />
                </div>

                <br />
                <div class="form-group">
                  <label>Phone: </label>
                  <input
                    className="form-control"
                    type="text"
                    name="phone"
                    value={input.phone}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="button"
                  class="btn btn-primary mb-2 mt-4"
                  onClick={handleAdd}
                >
                  Confirm
                </button>
              </form>

              {inputList.map((l) => (
                <div className="row">
                  <h1>{l.name}</h1>
                  <h3>{l.phone}</h3>
                  {/* <button onClick={() => handleRemove(l.email)}>Remove</button> */}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
};

export default DataBinding;
