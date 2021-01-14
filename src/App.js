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
import SignInView from "./Components/SignInView";
import SignedInView from "./Components/SignedInView";
import TableOfContents from "./Components/TableOfContents";

// mock data 
import data from "./data.js";

function App() {
  const [view, setView] = useState(0);

  return (
    <Router>
    <div className="row no-gutters">
      <div className="col-md-6 no-gutters">
        <div className="left-side">
          {data.map((notebook) => (
            <NotebookCard
              key={notebook.color}
              color={notebook.color}
              name={notebook.name}
            />))}
        </div>
      </div>

      <div className="col-md-6 no-gutters">
        <div className="right-side">
          {/* <TableOfContents /> */}
          {/* <NotePage /> */}
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
