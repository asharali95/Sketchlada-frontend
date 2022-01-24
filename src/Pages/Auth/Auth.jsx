import React from "react";
import SignupForm from "../../Components/SignupForm/SignupForm";
import LoginFormMUI from "../../MUI-Components/LoginFormMUI/LoginFormMUI";
import SignupFormMUI from "../../MUI-Components/SignupFormMUI/SignupFormMUI";
import "./Auth.css";
const Auth = () => {
  return (
    <div className="auth-container">
      <div className="signup flex">
        {/* <SignupForm /> */}
        <SignupFormMUI />
      </div>
      <div className="login flex">
        <LoginFormMUI />
      </div>
    </div>
  );
};

export default Auth;
