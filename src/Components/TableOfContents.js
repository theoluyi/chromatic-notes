import React from "react";
import NotePreviewCard from "./NotePreviewCard";

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
    </div>
  );
};

export default TableOfContents;
