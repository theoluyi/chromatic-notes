import React from "react";
import "./NotebookCard.css";

const NotebookCard = (props) => {
  return (
    <div className="notebook-card" id={props.color}>
      <p>Notebook</p>
    </div>
  );
};

export default NotebookCard;
