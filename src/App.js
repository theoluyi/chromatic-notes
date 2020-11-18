import React, { useState } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row } from "react-bootstrap";

function App() {
  // selectedNoteIndex, selectedNote, notes
  // const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  // const [selectedNote, setSelectedNote] = useState(null);
  // const [notes, setNotes] = useState(null);

  return (
    <Container fluid>
      <Row className="row">
        {/* LEFT SIDE */}
        <div className="col-md-6 no-gutters">
          <div className="left-side d-flex justify-content-center align-items-center">
            <Row>
              <NotebookCard color="dark-blue" />
              <NotebookCard color="dark-red" />
              <NotebookCard color="dark-green" />
            </Row>
            <Row>
              <NotebookCard color="blue" />
              <NotebookCard color="red" />
              <NotebookCard color="green" />
            </Row>
            <Row>
              <NotebookCard color="light-blue" />
              <NotebookCard color="light-red" />
              <NotebookCard color="light-green" />
            </Row>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="col-md-6 no-gutters">
          <div className="right-side d-flex justify-content-center align-items-center">
            right
          </div>
        </div>
      </Row>
    </Container>
  );
}

const NotebookCard = (props) => {
  return <div id={props.color}> inside the NotebookCard</div>;
};

export default App;
