import React from "react";
import NotePreviewCard from "./NotePreviewCard";
import NotePage from "./NotePage";
import Button from "react-bootstrap/Button";
import "../Component_Styles/TableOfContents.css";
import { Switch, Route, useRouteMatch } from "react-router-dom";

  /**
    * So, we are going to map over the note text Property, and call on its length Property divide that by the number of words we are
      Saying that a single note has, and then we are storing that page number as our current page count variable
      For the first note we are just assigning it number one, it starts on page 1, and the next note starts on one plus note the first note's
      Page count and then we just continue us going down, and we only need to store one number at a time, which is just a previous number of pages of all the
      Previous notes son together
    */
    // My priority is to get this deployed today, and this is not an MVP feature.
    // It's also going to require a bunch of CSS edits so how about we focus on our priorities?
    // const calculateAllPageCounts = () => {
    //   const notePageCountArray = props.notes.map(note => Math.floor(note.note_text.length/250))
    //   console.log(notePageCountArray)
    //   return notePageCountArray
    // } // calculateAllPageCounts()
    // QQ: uses inline styling
  
    
  const TableOfContents = (props) => {
  
    const {path} = useRouteMatch();

    const handleNewNoteClick = (e) => {
      props.newNote(e, props.color)
    }
  
  const listOfNotePreviewCards = props.notes.map ( (note) =>
  <>
  {/* {const noteWordCountArray = Math.floor(note.note_text.length/250)} */}

    <NotePreviewCard
      key={note.note_id}
      id={note.note_id}
      noteInfo={note}
    />
  </>
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
          <Button 
            variant="transparent" 
            onClick={handleNewNoteClick}
            > +
          </Button> 
        </div>} /> {/* end of Route */}
      {routesForNotePages}
    </Switch>
  );
};

export default TableOfContents;