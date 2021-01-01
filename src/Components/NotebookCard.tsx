import React from "react";
import "../Component_Styles/NotebookCard.css";

interface NotebookProp {
  color: string;
  name: string;
  [propName: string]: any;
}

const NotebookCard = (NotebookProp) => {
  return (
    <div className="notebook-card" id={NotebookProp.color}>
      <p>{NotebookProp.name}</p>
    </div>
  );
};

export default NotebookCard;
