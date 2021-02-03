import React, {useState} from "react";
import NotePreviewCard from "./NotePreviewCard";
import NotePage from "./NotePage";
import Button from "react-bootstrap/Button";
import "../Component_Styles/TableOfContents.css";

// ⬇️ new stuff
import { Switch, Route, useParams, useRouteMatch} from "react-router-dom";

// QQ: uses inline styling
const TableOfContents = (props) => {
  const [notePage, setNotePage] = useState(null);
  // adding a hook to enable cond-rend of notePage vs notesList
  const [displayNote, setDisplayNote] = useState(false);

  // match appears to be fine, correct object
  // console.log(props.match)

  const selectNote = note => {
      console.log("Hello from TableOfContents Component. I am invoking setNotePage.")
      setNotePage(note)
      console.log("notePage should now be set to the noteInfo props of the note whose button was pressed.")
  }

  const notesList = props.notes.map ( (noteInfo, idx) => 
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
  // noteInfo below is Note 1: PostgreSQL
  // time to check the value of the props in handleButtonClick


  const noteView = (
    <Route 
      path={`${props.match.url}/:noteId`} 
      render={routerProps =>
        <NotePage
          {...routerProps}
          // we should know here what the id is so we can pass it in as key + id
          // but having trouble getting access to params at this layer
          // key={idx}
          // id={idx}
          color={props.color}
          notes={props.notes}
          // match={props.match}
          // params={props.match.params}
        /> 
    }/>
  )
    
  // console.log(props)
  // console.log(notePages)

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
          <hr/>
          <h2>Table of Contents</h2> 
          <br/>
            { notesList }
          <br/>
          <Button variant="transparent">+</Button> 
          <br/>
          <br/>
          <Button variant="transparent">i</Button>
        </div>} />  {/* end of render prop */}
      {noteView}
    </Switch>
  );
};

// CLONE OF THIS BEFORE reworking into a single component which filters
// const notePages = props.notes.map ( (noteInfo, idx) =>
// <Route path={`${props.match.url}/:noteId`} render={routerProps =>       
//   <NotePage
//     {...routerProps}
//     key={idx}
//     id={idx}
//     noteInfo={noteInfo}
//     match={props.match}
//     location={props.location}
//     color={props.color}
//   /> 
// }/>
// );
// // ⬆️ new stuff
export default TableOfContents;
