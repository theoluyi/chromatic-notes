import React from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import "../Component_Styles/NotePage.css";

import {useParams} from "react-router-dom"

  // this could easily be the solution if we want to pass down the whole array of notes
  // and then just filter by ID. I feel like this should be a dumb as fuck component
  // though so it shouldn't have to do so much logic.
  // I want to see if we can get params in TOC instead of here.
  // Then we can just filter and render a single Route there... Not sure
  // if that saves many lines of code though but.... 

const NotePage = (props) => {
  let {color} = props

  const {noteId} = useParams();
  console.log("noteId: ", typeof noteId)

  let myNote = props.notes.find( ({note_id}) => note_id === Number(noteId+1))
  console.log("myNote: ", myNote)
  let {date_created, note_text, note_title} = myNote;

  return (
    <div className={`note-page ${color}`}>
      <div className="note-info">
        <h2>{note_title}</h2>
        <p>{date_created}</p>
      </div>
      <br/>
      <div className="note-body">
        <p>{note_text}</p>
        <MyEditor />
      </div>
    </div>
  );
};

function MyEditor() {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );
  return <Editor editorState={editorState} onChange={setEditorState} />;
}

export default NotePage;
