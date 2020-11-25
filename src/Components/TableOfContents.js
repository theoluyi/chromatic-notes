import React from "react";
import NotePreviewCard from "./NotePreviewCard";

const TableOfContents = (props) => {
  return (
    <div style={{ backgroundColor: "#6581e4", width: "100%" }}>
      <h2 style={{ textAlign: "center", color: "whitesmoke" }}>
        Table of Contents
      </h2>{" "}
      <br />
      <ul>
        <NotePreviewCard />
        <NotePreviewCard />
        <NotePreviewCard />
      </ul>
    </div>
  );
};

export default TableOfContents;
