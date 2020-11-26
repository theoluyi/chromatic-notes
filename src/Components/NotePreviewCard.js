import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";

const referenceJSX = (
  <Card bg="transparent" text="light" style={{ width: "100%" }}>
    <Card.Body>
      <Card.Title color="light">Note Title</Card.Title>
      <Card.Text>
        Preview Text ..........................................
      </Card.Text>
      <span>
        <Button variant="secondary">Edit</Button>{" "}
        <Button variant="dark">Delete</Button>
      </span>
    </Card.Body>
  </Card>
);

const NotePreviewCard = () => {
  return (
    <Accordion>
      <Card
        bg="transparent"
        text="light"
        style={{ width: "100%", color: "whitesmoke" }}
      >
        <Card.Header>
          <Accordion.Toggle as={Button} variant="transparent" eventKey="0">
            <span className="note-title">Note Title</span>{" "}
          </Accordion.Toggle>
          <span>
            <Button variant="secondary">Edit</Button>{" "}
          </span>
          <span>
            <Button variant="dark">Delete</Button>
          </span>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Preview text...................................</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default NotePreviewCard;
