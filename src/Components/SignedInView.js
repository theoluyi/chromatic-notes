import React from "react";
// import "../Component_Styles/SignedInView.css";

const SignedInView = (props) => {
  return (
    <div className="notebook-card" id={props.color}>
      <p>{props.name}</p>
    </div>
  );
};

export default SignedInView;
