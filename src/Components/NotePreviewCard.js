import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import "../Component_Styles/NotePreviewCard.css";

// QQ this hardcoded component uses inline styling
const NotePreviewCard = (props) => {
  console.log(props.noteInfo)
  const {date_created, note_text, note_title} = props.noteInfo;
  return (
    <Accordion>
      <Card bg="transparent" text="light">
        <Card.Header>
          <Accordion.Toggle as={Button} variant="transparent" eventKey="0">
            <span className="note-title">{note_title} <small>{date_created}</small></span>{" "}
          </Accordion.Toggle>
          <span>
            <Button variant="secondary">🖊</Button>{" "}
            <Button variant="dark">🗑</Button>
          </span>
          <span>1-10</span>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{note_text}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default NotePreviewCard;
