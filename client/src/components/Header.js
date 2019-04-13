import React from "react";
import { connect } from "react-redux";

const renderHeader = props => {
  switch (props.user) {
    case null:
      return (
        <div className="ui placeholder">
          <div className="header">
            <div className="line" />
            <div className="line" />
          </div>
        </div>
      );
    case false:
      return (
        <h1
          style={{ textAlign: "center", marginTop: "5vh" }}
          className="ui header"
        >
          Welcome to Authenticated
        </h1>
      );
    default:
      return (
        <div
          style={{
            backgroundColor: "cornflowerblue",
            padding: "0.4rem 0 0.4rem 0"
          }}
          className="ui secondary menu"
        >
          <h2
            style={{ marginLeft: "5vh", color: "white" }}
            className="ui header item"
          >
            Authentication
          </h2>
          <div className="right menu">
            <a
              style={{ marginRight: "5vh", fontSize: "1.2em", color: "white" }}
              className="ui item"
              href="/api/logout"
            >
              Logout
            </a>
          </div>
        </div>
      );
  }
};
const Header = props => {
  return renderHeader(props);
};

const mapStateToProps = ({ auth }) => {
  return { user: auth.authenticated };
};

export default connect(mapStateToProps)(Header);
