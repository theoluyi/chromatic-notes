import React from "react";
import NotePreviewCard from "./NotePreviewCard";
import Button from "react-bootstrap/Button";
import "../Component_Styles/TableOfContents.css";

// QQ this hardcoded component uses inline styling
const TableOfContents = (props) => {
  console.log(props)
  return (
    <div
      className={`table-of-contents ${props.color}`}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <h1>Notebook Title</h1>
      <hr />
      <h2>Table of Contents</h2> <br />
      <NotePreviewCard noteInfo={props.notes[0]}/>
      <NotePreviewCard noteInfo={props.notes[1]}/>
      <NotePreviewCard noteInfo={props.notes[2]}/>
      <NotePreviewCard noteInfo={props.notes[3]}/>
      <br />
      <Button variant="transparent">+</Button> <br />
      <br />
      <br />
      <Button variant="transparent">i</Button>
    </div>
  );
};

export default TableOfContents;
