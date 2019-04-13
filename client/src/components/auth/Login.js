import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actions from "../../actions";
import Form from "../Form/AuthForm";

const Login = props => {
  const onSubmit = formProps => {
    props.signIn(formProps);
  };
  const renderError = () => {
    if (props.auth.errorSignIn) {
      return (
        <div className="six wide field">
          <div className="ui error message">
            <p>{props.auth.error}</p>
          </div>
        </div>
      );
    }
  };
  return (
    <div style={{ marginTop: "25vh", display: "flex" }}>
      <div style={{ width: "60%" }}>
        <Form onSubmit={onSubmit} renderAuthError={renderError} />
        <br />
        <Link to="/signup">Don't have an account? Sign Up</Link>
      </div>
      <div style={{ width: "40%" }}>
        <br style={{ lineHeight: "10vh" }} />
        <a className="ui facebook button" href="/auth/facebook">
          <i className="facebook icon" />
          Sign Up and Sign In With Facebook
        </a>
      </div>
    </div>
  );
};
const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(
  mapStateToProps,
  actions
)(Login);
