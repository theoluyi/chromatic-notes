// React
import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Styling
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// Components
import NotebookCard from "./Components/NotebookCard";
// Unused Components
// import NotePage from "./Components/NotePage";
// import PleaseSignInView from "./Components/PleaseSignInView";
import SignedInView from "./Components/SignedInView";
import TableOfContents from "./Components/TableOfContents";
// mock data 
import mockData, { noteFactory } from "./data.js";

function App() {
  // state hooks 
  const [data, setData] = useState(mockData);
  const [
    //user
    , setUser
  ] = useState(false)

    // method for fake login w/out backend user persistence
  const mimicUserSignInAndUp = () => {
    setUser(true)
  }

  // works but doesn't preserve array's ordering (indexing?) of notebook objects 
  const newNote = (e, notebookColor) => {
    // console.log("You clicked the newNote button.", "notebookColor: ", notebookColor)
    const notebookToUpdate = data.find(notebook => notebook.color === notebookColor)
    const otherNotebooks = data.filter(notebook => notebook.color !== notebookColor)
    // console.log("notebookToUpdate Before: ", notebookToUpdate)
    notebookToUpdate.notes.push(noteFactory())
    // console.log("notebookToUpdate After: ", notebookToUpdate)
    setData([...otherNotebooks, notebookToUpdate])
  }

  const deleteNote = (notebookColor, noteId) => {
    // console.log("hello from app delete");
    // console.log('notebookColor :>> ', notebookColor);
    // console.log('noteId :>> ', noteId);

    const otherNotebooks = data.filter(notebook => notebook.color !== notebookColor)
    const notebookToUpdate = data.find(notebook => notebook.color === notebookColor)
    console.log('notebookToUpdate :>> ', notebookToUpdate);
    notebookToUpdate.notes = notebookToUpdate.notes.filter(note => note.note_id !== noteId)
    setData([...otherNotebooks, notebookToUpdate])
  }

  // console.log("noteFactory(): ", noteFactory())
  // console.log("data: ", data)

    // name={user? notebook.name : null}
  const navGridNotebooks = data.map(
    notebook =>  <NotebookCard
      key={notebook.color}
      color={notebook.color}
      name={notebook.name}
    />
  )

  const nineTableOfContentsRoutes = data.map(
    notebookInfo => <Route 
      path={`/${notebookInfo.color}`} 
      render={routerProps => <TableOfContents 
        {...routerProps} 
        color={notebookInfo.color} 
        notes={notebookInfo.notes}
        newNote={newNote}
        deleteNote={deleteNote}
        // this should be in TableOfContents, not App.js
        // selectNote={selectNote}
      />} 
    />
  )

  return (
    <BrowserRouter>
        <div className="row no-gutters">
          <div className="col-md-6 no-gutters">
            <div className="left-side">
              {navGridNotebooks}
            </div>
          </div>
          <div className="col-md-6 no-gutters">

            <div className="right-side">
              <Switch>
                <Route exact path="/" render={() => (
                    <div className="auth-and-empty-desk-views"> 
                        {/* className="auth-and-empty-desk-views" is a reminder that these views don't naturally pair up */}
                      <SignedInView mimicUserSignInAndUp={mimicUserSignInAndUp}/>
                    </div>
                )}/>
                  {/* nine routes with routerProps passed in */}
                {nineTableOfContentsRoutes}
              </Switch>
            </div>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;