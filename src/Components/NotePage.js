import React, {useState} from "react";
import "../Component_Styles/NotePage.css";
import RichEditor from "./RichEditor";
import {useParams, useHistory, Redirect} from "react-router-dom"
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

  // I want to see if we can get params in TOC instead of here.
  // Then we can just filter and render a single Route there... Not sure
  // if that saves many lines of code though but.... 

const NotePage = (props) => {
  const {color} = props;
  const {noteId} = useParams();
  const history = useHistory();
  // const {url} = useRouteMatch()


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const errorMessage = {
    date_created: "Today",
    note_text: `Notes in this app are generated with randomly assigned id numbers, which also determine the url/endpoint of a note (e.g., this one's is ${noteId}). You probably got here by refreshing while looking at a note. That note no longer exists now, but the url in your browser's address bar is still pointed to it. I could probably fix this with a simple redirect, but I find this error amusing and educating.`,
    note_title: "This note no longer exists 🥸 ah darnit"
  }

  const myNote = props.notes.find( ({note_id}) => note_id === Number(noteId));
  const {date_created, note_text, note_title} = myNote || errorMessage;
  const prettyDate = (date_created.slice(0,9))

  if (myNote) { return (
    <div className={`note-page ${color}`}>
        <h2>{note_title}</h2>

        <div className="note-info">
          <Button variant="transparent" 
                  onClick={() => history.goBack()}>
                  Back
          </Button>
          <span>Created: {prettyDate}</span>
        </div>
      <div className="note-body">
        <RichEditor note_text={note_text}/>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pensive Popout Window</Modal.Title>
        </Modal.Header>
        <Modal.Body>This project is for presentational purposes and lacks a database, so your notes won't save here. 
        I know. 😢 <br/><br/>Maybe a song will make you feel better?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Mmm I'll pass
          </Button>
          <Button variant="primary" onClick={() => window.open("https://www.youtube.com/watch?v=GOUHNld7tNo", "_blank")}>
            Gimme that song 
          </Button>
        </Modal.Footer>
      </Modal>
        <Button variant="transparent" onClick={handleShow}>
          Save
        </Button>
      </div>
    </div>
    )
  } else {
    console.log('history :>> ', history);
    return (
      // <div onClick={() => history.goBack()} style={{color: "black"}}> This note no longer exists, please select a notebook from the left to see available notes, or click <big><strong>here</strong></big> to go back.</div>
      <Redirect to={`/${color}`}/>
    )
  }
};

export default NotePage;
