import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NotebookCard from "./Components/NotebookCard";
import NotePage from "./Components/NotePage";
import TableOfContents from "./Components/TableOfContents";
import data from "./data.js";

function App() {
  // removed these additional bootstrap classNames
  // from left and right-side: d-flex justify-content-center
  // align-items-center

  const notebooks = data.map((notebook) => (
    <NotebookCard
      key={notebook.color}
      color={notebook.color}
      name={notebook.name}
    />
  ));

  console.log(notebooks);
  return (
    <div className="row no-gutters">
      <div className="col-md-6 no-gutters">
        <div className="left-side">{notebooks}</div>
      </div>
      <div className="col-md-6 no-gutters">
        {/* I think these Bootstrap classNames were why my attempt to apply flex column display to right-side
      caused UI issues resulting in the content jumping downwards */}
        <div
          className="right-side d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "#6581e4",
            padding: "1rem",
            border: "solid whitesmoke .3rem",
            color: "whitesmoke",
            textAlign: "center",
          }}
        >
          {/* <TableOfContents /> */}
          <NotePage />
        </div>
      </div>
    </div>
  );
}

export default App;
