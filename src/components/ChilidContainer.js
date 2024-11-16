import React from "react";

const ChilidContainer = ({ setValue }) => {
  // setValue(32)
  // console.log(check)
  // check(5)
  return (
    <div className="child">
      <h2>Child Component</h2>
      <input onChange={(eve) => setValue(eve.target.value)} />
    </div>
  );
};

export default ChilidContainer;
