import React from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import "../Component_Styles/NotePage.css";

import {useParams} from "react-router-dom"

const NotePage = (props) => {
  // const {date_created, note_text, note_title} = props.noteInfo;
  const color = props.color
  // console.log("Hello from NotePage component, my props are: ", props)
  // console.log("date_created ", props)
  // console.log(noteInfo)

  // this could easily be the solution if we want to pass down the whole array of notes
  // and then just filter by ID. I feel like this should be a dumb as fuck component
  // though so it shouldn't have to do so much logic.
  // I want to see if we can get params in TOC instead of here.
  // Then we can just filter and render a single Route there... Not sure
  // if that saves many lines of code though but.... 
  
  let noteId = useParams();
  console.log(noteId);

  console.log(props.notes)

  // let myNote = props.notes.filter(note => note.id === noteId)
  // console.log(myNote)
  
  // console.log(props.params)

  return (
    <div className={`note-page ${color}`}>
      <div className="note-info">
        {/* <h2>{note_title}</h2> */}
        {/* <h2>{noteInfo[match.params.noteId]}</h2> */}
        {/* <h2>{noteId}</h2> */}
        {/* <p>{date_created}</p> */}
        <p>{"hello"}</p>
      </div>
      <br/>
      <div className="note-body">
        {/* <p>{note_text}</p> */}
        <p>"hello"</p>
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
