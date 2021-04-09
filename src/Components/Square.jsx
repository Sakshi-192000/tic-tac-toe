import React, { useState } from "react";

//const [Player,setPlayer]=useState()
const Square = ({ position, value, onClick }) => {
  const renderAppropriateValue = () => {
    if (value === "HUMAN") return <div className="x">X</div>;
    if (value === "COMPUTER") return <div className="o">O</div>;
  };
  return (
    <div className="square" onClick={onClick}>
      {renderAppropriateValue()}
    </div>
  );
};

export default Square;
