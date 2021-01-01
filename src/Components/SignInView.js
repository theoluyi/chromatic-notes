import React from "react";
import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import "../Component_Styles/SignInView.css";

const SignInView = (props) => {
  return (
    <div className="sign-in-view" style={{ color: "black" }}>
      <h6>Welcome to</h6>
      <h2>Chromatic Notes</h2>
      <p style={{ color: "black" }}>Please sign in</p>
      <Button>Sign in</Button>
      <Button>Sign up</Button>
      <p style={{ color: "black" }}>
        Notes taken without signing in will not be saved.
      </p>
    </div>
  );
};

export default SignInView;
