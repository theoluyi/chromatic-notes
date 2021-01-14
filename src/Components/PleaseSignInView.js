import React from "react";
import Button from "react-bootstrap/Button";
// import "../Component_Styles/PleaseSignInView.css";

const PleaseSignInView = (props) => {
  return (
    <div>
      <h2>Chromatic Notes</h2>
      <Button variant="secondary">Sign in</Button> 
      <br />
      <br />
      <br />
      <Button variant="secondary">Sign up</Button> 
    </div>
  );
};

export default PleaseSignInView;
