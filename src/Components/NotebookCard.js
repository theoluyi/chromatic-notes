import React from "react";
import "../Component_Styles/NotebookCard.css";

const NotebookCard = (props) => {
  return (
    <div className="notebook-card" id={props.color} >
      <p>{props.name}</p>
    </div>
  );
};

export default NotebookCard;
