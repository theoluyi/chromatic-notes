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

  const notebooks = data.map((notebook) => (
    <NotebookCard
      key={notebook.color}
      color={notebook.color}
      name={notebook.name}
    />
  ));

  console.log(notebooks);
  console.log(notebooks);
  return (
    <div className="row no-gutters">
      <div className="col-md-6 no-gutters">
        <div className="left-side">{notebooks}</div>
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
