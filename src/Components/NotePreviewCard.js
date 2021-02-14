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

  console.log("date_created ", date_created)
  const prettyDate = (date_created.slice(0,9))

  return (
    <Accordion>
      <Card bg="transparent" text="light">
        <Card.Header>
          <Accordion.Toggle as={Button} variant="transparent" eventKey="0">
            <span className="note-title">{note_title} <br /> <small>{prettyDate}</small></span>{" "}
          </Accordion.Toggle>
          <span>
          <Link to={`${url}/${props.id+1}`} >
            <Button variant="secondary">
              <div>📖 </div>
            </Button>{" "}
          </Link>
            <Button variant="dark">🗑</Button>
          </span>
          {/* <span>PageNum</span> */}
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{note_text}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default NotePreviewCard;
