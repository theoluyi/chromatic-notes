import React from "react";
import { Link } from 'react-router-dom';
import "../Component_Styles/NotebookCard.css";

const NotebookCard = (props) => {
  // console.log(props)
  
  const handleClick = e => {
    // console.log(`I am the ${props.color} NotebookCard, you clicked me.`)
    props.selectNotebook(props.color)
  }

  return (
    <div className="notebook-card" id={props.color} >
      <Link to={`/${props.color}`}>
        <p>{props.name}<br/>Notebook</p>
      </Link>
    </div>
  );
};

export default NotebookCard;
