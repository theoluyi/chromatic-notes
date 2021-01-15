// React
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

// Styling
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Components
import NotebookCard from "./Components/NotebookCard";
import NotePage from "./Components/NotePage";
import PleaseSignInView from "./Components/PleaseSignInView";
import SignedInView from "./Components/SignedInView";
import TableOfContents from "./Components/TableOfContents";

// mock data 
import data from "./data.js";

/**
 * it seems like within the routing bs I'm also going to have layer in 
 * validations/ternaries to conditionally render different things if the user is signed in or not
 */
 /**
  * nest routes: I want to use master-detail pattern
  * I like the idea of being able to have the left side switch to the
  * table of contents view, so that you kind of burrow into the app, and the 
  * master view changes depending on what layer you're at, but in the interest of
  * moving forward and not pausing and waffling over extra levels of complexity 
  * that I didn't even decide to put into the Figma design, I think it's fine if I just
  * omit that thought for now and focus on following the design
  * 
  * that means that the master is the notebooks card 3x3 grid
  * the details are the table of contents and the individual notes
  * these two details should be side by side because one replaces the other
  * that's my current understanding of the difference between nested routes and
  * regular routing. In regular, when you switch to a new route, it overlays on top of the component,
  * it overwrites/obliterates the other component from the screen. I think this is what we are trying to do.
  * which means that every right side component should be at the same level of rendering hierarchy
  * only the NotebookCard grid (data.map....) is higher level than that
  */



function App() {
  // const [view, setView] = useState(0);
  // <Route exact path="/" render={() => <div>Home</div>} />
  // <Route path='/movies' render={routerProps => <MoviesPage {...routerProps} movies={this.state.movies}/>} />

  const [notebook, setNotebook] = useState('no-notebook-selected') // might be better to use numbers?
  
  const selectNotebook = notebookColor => {
    setNotebook(notebookColor)
  }

//<<<<<<< feature/routing
  const defaultView = (
  <div className="row no-gutters">
  <div className="col-md-6 no-gutters">
    <div className="left-side">
      {data.map((notebook) => (
        <NotebookCard
          key={notebook.color}
          color={notebook.color}
          name={notebook.name}
          selectNotebook={selectNotebook}
        />))}
    </div>
  </div>

  <div className="col-md-6 no-gutters">
    <div className="right-side">
        {false? <PleaseSignInView/> : <SignedInView/>}
    </div>
  </div>
</div>)

  return (
    <Router>
      <Route exact path="/" render={() => defaultView } />
      {/* next feature to implement is below */}
      {/* <Route path='/:notebook' render={routerProps => <TableOfContents {...routerProps} notes={this.state.notes}/>} /> */}

    </Router>
  );
}

export default App;
