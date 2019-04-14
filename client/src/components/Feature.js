import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../actions";

const renderList = props => {
  if (props.weapons.length < 1) {
    return;
  }
  return (
    <div className="ui cards">
      {props.weapons.map(({ _id, weapon, model, price, dateSent }) => {
        return (
          <div className="card" key={_id}>
            <div className="content">
              <div className="header">{weapon}</div>
              <div className="meta">{new Date(dateSent).toLocaleString()}</div>
              <div className="description">Model: {model}</div>
              <div className="description">Price: {price}GP</div>
            </div>
            <Link to={`/weapons/edit/${_id}`} className="ui button">
              <i className="icon settings" />
              Edit
            </Link>
          </div>
        );
      })}
    </div>
  );
};

const Feature = props => {
  useEffect(() => {
    props.fetchWeapons();
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      {renderList(props)}
      <Link
        style={{ padding: "1.5em", marginTop: "4vh" }}
        to="/weapons/add"
        className="circular ui icon button"
      >
        <i className="icon plus blue" />
      </Link>
    </div>
  );
};

const mapStateToProps = ({ weapons }) => {
  return { weapons };
};
export default connect(
  mapStateToProps,
  actions
)(Feature);
