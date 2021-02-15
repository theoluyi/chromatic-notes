import React from "react";
import "../Component_Styles/NotePage.css";
import RichEditor from "./RichEditor";
import {useParams} from "react-router-dom"
  // I want to see if we can get params in TOC instead of here.
  // Then we can just filter and render a single Route there... Not sure
  // if that saves many lines of code though but.... 

const NotePage = (props) => {
  const {color} = props;
  const {noteId} = useParams();

  const myNote = props.notes.find( ({note_id}) => note_id === Number(noteId));
  const {date_created, note_text, note_title} = myNote;
  const prettyDate = (date_created.slice(0,9))

  return (
    <div className={`note-page ${color}`}>
      <div className="note-info">
        <h2>{note_title}</h2>
        <p>Created: {prettyDate}</p>
      </div>
      <div className="note-body">
        <RichEditor note_text={note_text}/>
      </div>
    </div>
  );
};

export default NotePage;
