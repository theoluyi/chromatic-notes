import React from "react";
import { NavLink } from 'react-router-dom';
import "../Component_Styles/NotebookCard.css";

const NotebookCard = (props) => {
  
  const handleClick = e => {
    console.log(`I am the ${props.color} NotebookCard, you clicked me.`)
    props.selectNotebook(props.color)
  }

  return (
    <div className="notebook-card" id={props.color} onClick={handleClick}>
      <NavLink to={`/${props.color}`}>
        <p>{props.name}<br/>Notebook</p>
      </NavLink>
    </div>
  );
};

export default NotebookCard;
