import React from "react";
import { Link } from "react-router-dom";

import Form from "../Form";

const Login = () => {
  const onSubmit = formProps => {
    console.log(formProps);
  };
  return (
    <div style={{ marginTop: "20vh" }}>
      <Form onSubmit={onSubmit} />
      <Link to="/signup">Sign Up</Link>
      <a>Sign Up and Sign In With Facebook</a>
    </div>
  );
};

export default Login;
