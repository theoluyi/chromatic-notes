import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Button from "react-bootstrap/Button";

function App() {
  // selectedNoteIndex, selectedNote, notes
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);
  const [notes, setNotes] = useState(null);

  // removed these additional bootstrap classNames from left and right-side:  d-flex justify-content-center align-items-center
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
        <div className="right-side">right</div>
      </div>
    </div>
  );
}

const NotebookCard = (props) => {
  return (
    <div className="notebook-card" id={props.color}>
      <p>NotebookCard</p>
    </div>
  );
};

export default App;
