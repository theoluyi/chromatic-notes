import React from "react";
// import "../Component_Styles/SignInView.css";

const SignInView = (props) => {
  return (
    <div className="notebook-card" id={props.color}>
      <p>{props.name}</p>
    </div>
  );
};

export default SignInView;
