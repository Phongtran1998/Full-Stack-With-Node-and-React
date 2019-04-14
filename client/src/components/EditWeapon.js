import React, { useEffect } from "react";
import { connect } from "react-redux";

import WeaponForm from "./Form/WeaponForm";
import requireAuth from "./hocs/requireAuth";
import * as actions from "../actions";

const EditWeapon = props => {
  useEffect(() => {
    props.fetchWeapons();
  }, []);
  const onSubmit = formValues => {
    console.log(formValues);
  };
  return <WeaponForm onSubmit={onSubmit} initialValues={props.weapon} />;
};

const mapStateToProps = ({ weapons }, ownProps) => {
  return {
    weapon: weapons.find(weapon => weapon._id === ownProps.match.params.id)
  };
};

export default connect(
  mapStateToProps,
  actions
)(requireAuth(EditWeapon));
