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
    props.editWeapon(formValues, () => {
      props.history.push("/");
    });
  };
  const onDelete = id => {
    props.deleteWeapon(id, () => {
      props.history.push("/");
    });
  };
  return (
    <>
      <WeaponForm onSubmit={onSubmit} initialValues={props.weapon}>
        <button
          type="button"
          onClick={() => {
            onDelete(props.weapon._id);
          }}
          className="ui button red"
        >
          Delete
        </button>
      </WeaponForm>
    </>
  );
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
