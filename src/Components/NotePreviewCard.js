import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import "../Component_Styles/NotePreviewCard.css";
import {Link, useRouteMatch} from "react-router-dom";

// QQ: uses inline styling
const NotePreviewCard = (props) => {
  const {date_created, note_text, note_title} = props.noteInfo;
  const {url} = useRouteMatch()

  return (
    <Accordion>
      <Card bg="transparent" text="light">
        <Card.Header>
          <Accordion.Toggle as={Button} variant="transparent" eventKey="0">
            <span className="note-title">{note_title} <br /> <small>{date_created}</small></span>{" "}
          </Accordion.Toggle>
          <span>
            <Button variant="secondary">
            {/* new stuff right here with this link */}
              <Link to={`${url}/${props.id}`}>📖 </Link>
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
