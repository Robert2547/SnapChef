import React from "react";
import "./Card.css";

const Card = ({ title, details }) => {
  return (
    <div className="card">
      <div className="card-details">
        <p className="text-title">{title}</p>
        <p className="text-body">{details}</p>
      </div>
      <button className="card-button"> More Info </button>
    </div>
  );
};

export default Card;
