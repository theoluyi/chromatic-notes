import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import "../Component_Styles/NotePreviewCard.css";
import {Link, useRouteMatch} from "react-router-dom";

// QQ: uses inline styling
const NotePreviewCard = (props) => {
  const {url} = useRouteMatch()
  const {date_created, note_text, note_title} = props.noteInfo;
  const prettyDate = (date_created.slice(0,9))

  let first30Words = note_text.split(" ").slice(0,30).join(" ").concat("...")

  return (
    <Accordion>
      <Card bg="transparent" text="light">
        <Card.Header>
          <Accordion.Toggle className="preview-card-accordion" as={Button} variant="transparent" eventKey="0">
            <span className="note-title">{note_title} <br/> <small>{prettyDate}</small></span>{" "}
          </Accordion.Toggle>
          <span className="preview-buttons">
          <Link to={`${url}/${props.id}`}>
            <Button variant="secondary">
              <div>📖</div>
            </Button>{" "}
          </Link>
            <Button variant="dark">🗑</Button>
          </span>
          {/* <span>PageNum</span> */}
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{first30Words}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default NotePreviewCard;
