import React from "react";
import "../Component_Styles/NotePage.css";
import RichEditor from "./RichEditor";
import {useParams, useHistory} from "react-router-dom"
import Button from "react-bootstrap/Button";

  // I want to see if we can get params in TOC instead of here.
  // Then we can just filter and render a single Route there... Not sure
  // if that saves many lines of code though but.... 

const NotePage = (props) => {
  const {color} = props;
  const {noteId} = useParams();
  const history = useHistory();

  const errorMessage = {
    date_created: "Today",
    note_text: "Notes in this app are generated with randomly assigned id numbers, which also determine the url/endpoint of a note. You probably got here by refreshing while looking at a note. That note no longer exists now, but the url in your browser's address bar is still pointed to it. I could probably fix this with a simple redirect, but I find this error amusing.",
    note_title: "This note no longer exists, ah darnit."
  }

  const myNote = props.notes.find( ({note_id}) => note_id === Number(noteId));
  const {date_created, note_text, note_title} = myNote || errorMessage;
  const prettyDate = (date_created.slice(0,9))

  return (
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
      </div>
    </div>
  );
};

export default NotePage;
