import React from "react";
import Form from "../Form/AuthForm";
import { connect } from "react-redux";

import * as actions from "../../actions";

const SignUp = props => {
  const onSubmit = formProps => {
    props.signUp(formProps, () => {
      props.history.push("/");
    });
  };
  const renderError = () => {
    if (props.auth.errorSignUp) {
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
    <div
      style={{
        marginTop: "25vh",
        marginLeft: "50vh"
      }}
    >
      <Form onSubmit={onSubmit} renderAuthError={renderError} />
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(
  mapStateToProps,
  actions
)(SignUp);
