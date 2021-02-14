import React from "react";
import { Link } from 'react-router-dom';
import "../Component_Styles/NotebookCard.css";

const NotebookCard = (props) => (
  <div className="notebook-card" id={props.color} >
    <Link to={`/${props.color}`}>
      <p>
        {props.name}
        <br/>
        Notebook
      </p>
    </Link>
  </div>
);

export default NotebookCard;
