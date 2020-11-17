import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // selectedNoteIndex, selectedNote, notes
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);
  const [notes, setNotes] = useState(null);

  return (
    <>
      <div className="row no-gutters">
        <div className="col-md-6 no-gutters">
          <div className="left-side d-flex justify-content-center align-items-center">
            hello
          </div>
        </div>
        <div className="col-md-6 no-gutters">
          <div className="right-side d-flex justify-content-center align-items-center">
            goodbye
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
