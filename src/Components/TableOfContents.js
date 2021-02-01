import React, {useState} from "react";
import NotePreviewCard from "./NotePreviewCard";
import NotePage from "./NotePage";
import Button from "react-bootstrap/Button";
import "../Component_Styles/TableOfContents.css";

// ⬇️ new stuff
import { Switch, Route } from "react-router-dom";

// QQ: uses inline styling
const TableOfContents = (props) => {
  const [notePage, setNotePage] = useState(null);

  const selectNote = note => {
      console.log("Hello from TableOfContents Component. I am invoking setNotePage.")
      
      console.log("notePage should now be set to the noteInfo props of the note whose button was pressed.")
  }

  const thisNotebooksNotes = props.notes.map ( (noteInfo, idx) => 
    <NotePreviewCard
      key={idx}
      id={idx}
      noteInfo={noteInfo}
      match={props.match}
      location={props.location}
      selectNote={selectNote}
    />
  );
  
  // ⬇️ new stuff； not sure about route path syntax (template literal looks hmmmm to me)
  const notePages = props.notes.map ( (noteInfo, idx) =>
    <Route path={`${props.match.url}/:noteId`} render={routerProps =>       
      <NotePage
        {...routerProps}
        key={idx}
        id={idx}
        noteInfo={noteInfo}
        match={props.match}
        location={props.location}
        color={props.color}
      /> 
    }/>
  );
  // ⬆️ new stuff
    
  // console.log(props)

  const capitalizedNotebookTitle = props.color.split('-').map( word => (word[0].toUpperCase()) + word.slice(1)).join(' ');

  return (  
    <Switch>
      <Route exact path={props.match.url} render={() => <div
          className={`table-of-contents ${props.color}`}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <h1> { 'The '+ capitalizedNotebookTitle + ' Notebook' } </h1>
          <hr />
          <h2>Table of Contents</h2> 
          <br />
            { thisNotebooksNotes }
          <br />
          <Button variant="transparent">+</Button> 
          <br />
          <br />
          <Button variant="transparent">i</Button>
        </div>} />
      {notePages}
    </Switch>
  );
};

export default TableOfContents;
