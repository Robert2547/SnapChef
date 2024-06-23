import React from "react";
import "./Card.css";

const Card = ({ title, image }) => {
  return (
    <div className="card">
      <div className="card-image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="card-details">
        <p className="text-title">{title}</p>
      </div>
      <button className="card-button"> More Info </button>
    </div>
  );
};

export default Card;
