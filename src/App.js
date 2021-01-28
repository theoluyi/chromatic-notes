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
import mockData from "./data.js";

function App() {
    // state hooks 
  const [displayedNotebook, setDisplayedNotebook] = useState('no-notebook-selected') // might be better to use numbers?
  const [user, setUser] = useState(false)
  // const [data, setData] = useState({})

    // function down, invocation up
  const selectNotebook = notebookColor => {
    setDisplayedNotebook(notebookColor)
  }

  const selectNote = note => {
    console.log("hello from app.js")
  }

    // method for fake login w/out backend user persistence
  const mimicUserSignInAndUp = () => {
    setUser(true)
  }

    // name={user? notebook.name : null}
  const navGridNotebooks = mockData.map(
    notebook =>  <NotebookCard
      key={notebook.color}
      color={notebook.color}
      name={notebook.name}
      selectNotebook={selectNotebook}
    />
  )

  const nineTableOfContentsRoutes = mockData.map(
    notebookInfo => <Route 
      path={`/${notebookInfo.color}`} 
      render={routerProps => <TableOfContents 
        {...routerProps} 
        color={notebookInfo.color} 
        notes={notebookInfo.notes}       
        selectNote={selectNote}
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