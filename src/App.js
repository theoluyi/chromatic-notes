import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  // selectedNoteIndex, selectedNote, notes
  // const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  // const [selectedNote, setSelectedNote] = useState(null);
  // const [notes, setNotes] = useState(null);

  return (
    <div className="notebook-grid">
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
  );
}

const NotebookCard = (props) => {
  return <div id={props.color}> inside the NotebookCard</div>;
};

{
  /* <Container fluid>
      <Row className="row">
        <div className="col-md-6">
          <div className="left-side d-flex justify-content-center align-items-center">
            <div className="test">
              <Row>
                <Col>
                  <NotebookCard className="notebook-card" color="dark-blue" />
                </Col>
                <Col>
                  <NotebookCard className="notebook-card" color="dark-red" />
                </Col>
                <Col>
                  <NotebookCard className="notebook-card" color="dark-green" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <NotebookCard className="notebook-card" color="blue" />
                </Col>
                <Col>
                  <NotebookCard className="notebook-card" color="red" />
                </Col>
                <Col>
                  <NotebookCard className="notebook-card" color="green" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <NotebookCard className="notebook-card" color="light-blue" />
                </Col>
                <Col>
                  <NotebookCard className="notebook-card" color="light-red" />
                </Col>
                <Col>
                  <NotebookCard className="notebook-card" color="light-green" />
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="right-side d-flex justify-content-center align-items-center">
            right
          </div>
        </div>
      </Row>
    </Container> 
  */
}

export default App;
