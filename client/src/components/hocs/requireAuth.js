import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export default ChildComponent => {
  const RequireAuth = props => {
    switch (props.auth) {
      case false:
        return <Redirect to="/" />;
      default:
        return <ChildComponent {...props} />;
    }
  };
  const mapStateToProps = ({ auth }) => {
    return { auth: auth.authenticated };
  };
  return connect(mapStateToProps)(RequireAuth);
};
