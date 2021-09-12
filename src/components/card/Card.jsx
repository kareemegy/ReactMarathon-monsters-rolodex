import React from "react";
import "./Card.css";
const Card = ({ monster }) => {
  const { name, id, email } = monster;
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${id}?set=set2`} alt="monsterimage" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
