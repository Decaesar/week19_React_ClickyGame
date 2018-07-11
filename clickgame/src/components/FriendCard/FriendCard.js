
import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
    <div className="container">
    <div className="card" onClick={props.userClick}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      </div>
      </div>
);


export default FriendCard;