import React from "react";

const ListsandKeys = () => {
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((number) => number * 2);

  return (
    <div>
      <div className="text-center">
        <p>{numbers}</p>
        {numbers.map((service, index) => (
          <p> key={service}</p>
        ))}
      </div>
    </div>
  );
};

export default ListsandKeys;
