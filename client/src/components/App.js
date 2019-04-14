import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import Feature from "./Feature";
import Header from "./Header";
import CreateWeapon from "./CreateWeapon";
import EditWeapon from "./EditWeapon";

const App = props => {
  useEffect(() => {
    props.fetchUser();
  }, []);
  const Root = () => {
    switch (props.user) {
      case null:
        return (
          <div className="ui placeholder">
            <div className="paragraph">
              <div className="line" />
              <div className="line" />
              <div className="line" />
              <div className="line" />
              <div className="line" />
            </div>
            <div className="paragraph">
              <div className="line" />
              <div className="line" />
              <div className="line" />
            </div>
          </div>
        );
      case false:
        return <Login />;
      default:
        return <Feature />;
    }
  };

  return (
    <div className="page-container">
      <Header />
      <div id="content-wrap" className="ui container">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Root} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/weapons/add" exact component={CreateWeapon} />
            <Route path="/weapons/edit/:id" exact component={EditWeapon} />
          </Switch>
        </BrowserRouter>
      </div>
      <footer className="footer">
        <br style={{ lineHeight: "30px" }} />
        <p style={{ fontWeight: "bold" }}>&copy; 2019 powered by Phong Tran</p>
      </footer>
    </div>
  );
};
const mapStateToProps = ({ auth }) => {
  return { user: auth.authenticated };
};
export default connect(
  mapStateToProps,
  actions
)(App);
