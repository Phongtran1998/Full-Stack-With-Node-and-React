import React from "react";
import { connect } from "react-redux";

import * as actions from "../actions";
import requireAuth from "./hocs/requireAuth";
import WeaponForm from "./Form/WeaponForm";

const CreateWeapon = props => {
  const onSubmit = formValues => {
    props.createWeapon(formValues, () => {
      props.history.push("/");
    });
  };
  return <WeaponForm onSubmit={onSubmit} />;
};

export default connect(
  null,
  actions
)(requireAuth(CreateWeapon));
