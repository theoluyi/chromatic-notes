import React from "react";
import NotePreviewCard from "./NotePreviewCard";
import Button from "react-bootstrap/Button";
import "../Component_Styles/TableOfContents.css";

// QQ: uses inline styling
const TableOfContents = (props) => {
  const capitalizedNotebookTitle = props.color.split('-').map(
    word => (word[0].toUpperCase()) + word.slice(1)).join(' ');

  const thisNotebooksNotes = props.notes.map ( (noteInfo, idx) => 
    <NotePreviewCard 
      key={idx} 
      id={idx} 
      noteInfo={noteInfo} 
      match={props.match}
      location={props.location}
      selectNote={props.selectNote}
    />
  );

  // console.log(props)

  return (  
    <div
      className={`table-of-contents ${props.color}`}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <h1> { 'The '+ capitalizedNotebookTitle + ' Notebook' } </h1>
      <hr />
      <h2>Table of Contents</h2> 
      <br />
        { thisNotebooksNotes }
      <br />
      <Button variant="transparent">+</Button> 
      <br />
      <br />
      <Button variant="transparent">i</Button>
    </div>
  );
};

export default TableOfContents;
