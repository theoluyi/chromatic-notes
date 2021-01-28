import React from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import "../Component_Styles/NotePage.css";

const NotePage = (props) => {
  const {date_created, note_text, note_title} = props.noteInfo;
  const {color} = props

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
