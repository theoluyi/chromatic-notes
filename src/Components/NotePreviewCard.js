import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const NotePreviewCard = () => {
  return (
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
};

export default NotePreviewCard;
