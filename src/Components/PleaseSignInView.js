import React from "react";
import Button from "react-bootstrap/Button";
// import "../Component_Styles/PleaseSignInView.css";

const PleaseSignInView = (props) => {
  return (
    <div>
      <br />
      <br />      
      <br />
      <br />
      <br />      
      <br />
      <br />
      <h2 style={{color: 'black'}}>Chromatic Notes</h2>
      <Button variant="secondary">Sign in</Button> 
      <br />
      <Button variant="secondary">Sign up</Button> 
      <br />
      <br />      
      <br />
      <p style={{color: 'black'}}>Notes written without signing in will not be saved.</p>
    </div>
  );
};

export default PleaseSignInView;
