import React from "react";
import "./card.css";

function NewtestCard(props) {
  return (
    <>
      <div className="card" style={{ width: 160, height: 200 }}>
        <img className="card-img-top" src={props.imgsrc} alt={props.title} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
        </div>
      </div>
    </>
  );
}

export default NewtestCard;
