import React from "react";
//import CSS
import "../css/reset.css";
import "../css/materialize.css";
import "../css/style.css";

const CharacterCard = props => {
  return (
    <div onClick={() => props.selectChar(props.id)} className="card hoverable card-size" data-id={props.id}>
      <div className="card-image img-width">
        <img src={props.image} alt={props.name} />
        <span className="card-title">{props.name}</span>
      </div>
    </div>
  );
};

export default CharacterCard;
