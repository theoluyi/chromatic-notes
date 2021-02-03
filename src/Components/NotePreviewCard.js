import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import "../Component_Styles/NotePreviewCard.css";
import {Link} from "react-router-dom";

// QQ: uses inline styling
const NotePreviewCard = (props) => {
  const {date_created, note_text, note_title} = props.noteInfo;
  const {match} = props;

  const handleButtonClick = ( ) => {
    props.selectNote(props.noteInfo);
    // console.log("Hello from NotePreviewCard, my props.noteInfo are: ", props.noteInfo)
  }

  return (
    <Accordion>
      <Card bg="transparent" text="light">
        <Card.Header>
          <Accordion.Toggle as={Button} variant="transparent" eventKey="0">
            <span className="note-title">{note_title} <br /> <small>{date_created}</small></span>{" "}
          </Accordion.Toggle>
          <span>
            <Button variant="secondary" onClick={handleButtonClick}>
            {/* new stuff right here with this link */}
              <Link to={`${match.url}/${props.id}`}>📖 </Link>
            </Button>{" "}
            <Button variant="dark">🗑</Button>
          </span>
          <span>PageNum</span>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{note_text}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default NotePreviewCard;
