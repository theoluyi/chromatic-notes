import React from "react";
import NotePreviewCard from "./NotePreviewCard";
import Button from "react-bootstrap/Button";

// QQ this hardcoded component uses inline styling
const TableOfContents = (props) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <h1>Notebook Title</h1>
      <hr />
      <h2>Table of Contents</h2> <br />
      <NotePreviewCard />
      <NotePreviewCard />
      <NotePreviewCard />
      <NotePreviewCard />
      <br />
      <Button
        variant="transparent"
        style={{ color: "whitesmoke", border: "solid whitesmoke 1px" }}
      >
        +
      </Button>
    </div>
  );
};

// dotted - Defines a dotted border
// dashed - Defines a dashed border
// solid - Defines a solid border
// double - Defines a double border
// groove - Defines a 3D grooved border. The effect depends on the border-color value
// ridge - Defines a 3D ridged border. The effect depends on the border-color value
// inset - Defines a 3D inset border. The effect depends on the border-color value
// outset - Defines a 3D outset border. The effect depends on the border-color value
// none - Defines no border
// hidden - Defines a hidden border

export default TableOfContents;
