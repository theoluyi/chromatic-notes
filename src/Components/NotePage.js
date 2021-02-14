import React from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import "../Component_Styles/NotePage.css";
import {useParams} from "react-router-dom"
  // I want to see if we can get params in TOC instead of here.
  // Then we can just filter and render a single Route there... Not sure
  // if that saves many lines of code though but.... 

const NotePage = (props) => {
  const {color} = props;
  const {noteId} = useParams();

  const myNote = props.notes.find( ({note_id}) => note_id === Number(noteId));
  const {date_created, note_text, note_title} = myNote;

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
