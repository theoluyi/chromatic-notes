import React from "react";
import NotePreviewCard from "./NotePreviewCard";
import Button from "react-bootstrap/Button";
import "../Component_Styles/TableOfContents.css";

// QQ this component uses inline styling
const TableOfContents = (props) => {
  const capitalizedNotebookTitle = props.color.split('-').map(
    word => (word[0].toUpperCase()) + word.slice(1)).join(' ');

  const everyNote = props.notes.map (
    note => <NotePreviewCard noteInfo={note} />
  )

    return (
    <div
      className={`table-of-contents ${props.color}`}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <h1>{capitalizedNotebookTitle}</h1>
      <hr />
      <h2>Table of Contents</h2> 
      <br />
        {everyNote}
      <br />
      <Button variant="transparent">+</Button> 
      <br />
      <br />
      <Button variant="transparent">i</Button>
    </div>
  );
};

export default TableOfContents;
