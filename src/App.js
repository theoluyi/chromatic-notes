import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NotebookCard from "./Components/NotebookCard";
import NotePage from "./Components/NotePage";
import SignInView from "./Components/SignInView";
import SignedInView from "./Components/SignedInView";
import TableOfContents from "./Components/TableOfContents";
import data from "./data.js";

function App() {
  const [view, setView] = useState(0);

  return (
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
          <TableOfContents />
          {/* <NotePage /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
