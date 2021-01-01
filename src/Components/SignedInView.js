import React from "react";
import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import "../Component_Styles/SignedInView.css";

const SignedInView = (props) => {
  return (
    <div className="signed-in-view" style={{ color: "black" }}>
      <h6>Welcome to Chromatic Notes **Username**</h6>
      <p style={{ color: "black" }}>Please select a notebook</p>
    </div>
  );
};

export default SignedInView;
