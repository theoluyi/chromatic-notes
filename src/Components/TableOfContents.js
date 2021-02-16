import React from "react";
import NotePreviewCard from "./NotePreviewCard";
import NotePage from "./NotePage";
import Button from "react-bootstrap/Button";
import "../Component_Styles/TableOfContents.css";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const TableOfContents = (props) => {
  // QQ: uses inline styling
  const {path} = useRouteMatch();

  const listOfNotePreviewCards = props.notes.map ( (note) => 
    <NotePreviewCard
      key={note.note_id}
      id={note.note_id}
      noteInfo={note}
    />
  );

  const routesForNotePages = props.notes.map ( (note, idx) => 
      <Route
        path={`${path}/:noteId`} 
        render={routerProps =>
          <NotePage
            {...routerProps}
            key={note.note_id}
            id={note.note_id}
            color={props.color}
            notes={props.notes}
          /> 
      }/>
  );

  const capitalizedNotebookTitle = (
    props.color.split('-').map( 
      word => (word[0].toUpperCase()) + word.slice(1)
    ).join(' ')
  );

  return (  
    <Switch>
      <Route exact path={path} render={() => 
        <div
          className={`table-of-contents ${props.color}`}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <h1> { 'The '+ capitalizedNotebookTitle + ' Notebook' } </h1>
          <hr/>
          <h4>Table of Contents</h4> 
            { listOfNotePreviewCards }
          <br/>
          <Button variant="transparent">+</Button> 
        </div>} />  {/* end of render prop */}
      {routesForNotePages}
    </Switch>
  );
};

export default TableOfContents;