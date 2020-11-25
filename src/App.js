import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import TableOfContents from "./Components/TableOfContents";

function App() {
  // removed these additional bootstrap classNames
  // from left and right-side: d-flex justify-content-center
  // align-items-center
  return (
    <div className="row no-gutters">
      <div className="col-md-6 no-gutters">
        <div className="left-side">
          <NotebookCard color="dark-blue" />
          <NotebookCard color="dark-red" />
          <NotebookCard color="dark-green" />
          <NotebookCard color="blue" />
          <NotebookCard color="red" />
          <NotebookCard color="green" />
          <NotebookCard color="light-blue" />
          <NotebookCard color="light-red" />
          <NotebookCard color="light-green" />
        </div>
      </div>
      <div className="col-md-6 no-gutters">
        <div className="right-side d-flex justify-content-center align-items-center">
          <TableOfContents />
        </div>
      </div>
    </div>
  );
}

const NotebookCard = (props) => {
  return (
    <div className="notebook-card" id={props.color}>
      <p>Notebook</p>
    </div>
  );
};

export default App;
