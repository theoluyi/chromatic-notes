import React from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import "../Component_Styles/NotePage.css";

const NotePage = (props) => {
  console.log(props.color)
  return (
    <div className={`note-page ${props.color}`}>
      <div className="note-info">
        <h2>Note Title</h2>
        <p>Creation Date</p>
      </div>
      <br/>
      <div className="note-body">
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
