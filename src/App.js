import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NotebookCard from "./Components/NotebookCard";
import NotePage from "./Components/NotePage";
import TableOfContents from "./Components/TableOfContents";
import notebooks from "./data.js";

function App() {
  // removed these additional bootstrap classNames
  // from left and right-side: d-flex justify-content-center
  // align-items-center

  // let journalNotes = data.users.notebooks[0].notes;
  let journalNotes = notebooks[0].notes;
  console.log(journalNotes);
  return (
    <div className="row no-gutters">
      <div className="col-md-6 no-gutters">
        <div className="left-side">
          <NotebookCard color="dark-blue" />
          <NotebookCard color="dark-red" />
          <NotebookCard color="dark-green" />
          <NotebookCard color="blue" />
          <NotebookCard color="red" />
          <NotebookCard color="green" />
          <NotebookCard color="light-blue" />
          <NotebookCard color="light-red" />
          <NotebookCard color="light-green" />
        </div>
      </div>
      <div className="col-md-6 no-gutters">
        {/* I think these Bootstrap classNames were why my attempt to apply flex column display to right-side
      caused UI issues resulting in the content jumping downwards */}
        <div
          className="right-side d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "#6581e4",
            padding: "1rem",
            border: "solid whitesmoke .3rem",
            color: "whitesmoke",
            textAlign: "center",
          }}
        >
          {/* <TableOfContents /> */}
          <NotePage />
        </div>
      </div>
    </div>
  );
}

export default App;
