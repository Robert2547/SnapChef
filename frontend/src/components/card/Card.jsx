import React from "react";
import "./Card.css";
import { Heart } from "../button/Heart";

const Card = ({ image }) => {
  return (
    <div className="card relative">
      <div className="card-image" style={{ backgroundImage: `url(${image})` }}>
        <Heart className="absolute top-2 left-2 text-red-500 w-6 h-6 z-10" />
      </div>
      <div className="card-details p-4">
        <button className="card-button">More Info</button>
      </div>
    </div>
  );
};

export default Card;
