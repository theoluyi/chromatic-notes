import React from "react";
import "../Component_Styles/NotebookCard.css";

const NotebookCard = (props) => {
  
  const handleClick = e => {
    console.log(`I am the ${props.color} NotebookCard, you clicked me.`)
    props.selectNotebook(props.color)
  }

  return (
    <div className="notebook-card" id={props.color} onClick={handleClick}>
      <p>{props.name}</p>
    </div>
  );
};

export default NotebookCard;
