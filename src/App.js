// React
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
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
import mockData from "./data.js";

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

  // how about we commit to the user sign in process?
  // instead of splitting between wanting a note playground without login and one with
  // before we've done either?

function App() {
  // state hooks 
  const [displayedNotebook, setDisplayedNotebook] = useState('no-notebook-selected') // might be better to use numbers?
  const [user, setUser] = useState(false)
  // const [data, setData] = useState({})

  // function down, invocation up
  const selectNotebook = notebookColor => {
    setDisplayedNotebook(notebookColor)
  }

  // method for fake login w/out backend user persistence
  const mimicUserSignInAndUp = () => {
    setUser(true)
  }

  const colorsArray = [];
  mockData.forEach((notebookInfo => colorsArray.push(notebookInfo.color)) );
  console.log(colorsArray);

  return (
    <Router>
        <div className="row no-gutters">
          <div className="col-md-6 no-gutters">
            <div className="left-side">

            {/* the whole right side grid is a NavGrid (i.e., a NavBar) */}
              {(mockData.map((notebook) => (
                <NotebookCard
                  key={notebook.color}
                  color={notebook.color}
                  // name={user? notebook.name : null}
                  name={notebook.name}
                  selectNotebook={selectNotebook}
                />)))}
            </div>
          </div>
          <div className="col-md-6 no-gutters">
            <div className="right-side">

            <Route exact path="/" render={() => (
                <div className="auth-and-empty-desk-views"> 
                  {/* className="auth-and-empty-desk-views" is a reminder that these views don't naturally pair up */}
                  {/* { user? <SignedInView mimicUserSignInAndUp={mimicUserSignInAndUp}/> 
                  : <PleaseSignInView mimicUserSignInAndUp={mimicUserSignInAndUp}/> } */}
                  <SignedInView mimicUserSignInAndUp={mimicUserSignInAndUp}/>
                </div>
            )} />
            <Route path="/dark-red" render={routerProps => <TableOfContents color="dark-red" {...routerProps} notes={mockData[1].notes} />}>

            </Route>

                
            </div>
          </div>
        </div>
      {/* next feature to implement is below */}
      {/* <Route path='/:notebook' render={routerProps => <TableOfContents {...routerProps} notes={this.state.notes}/>} /> */}
      {/* <Route path='/movies' render={routerProps => <MoviesPage {...routerProps} movies={this.state.movies}/>} /> */}
    </Router>
  );
}

export default App;
