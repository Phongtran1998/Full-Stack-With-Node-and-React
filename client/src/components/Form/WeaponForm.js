import React from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

const renderError = ({ error, touched }) => {
  if (touched && error) {
    return (
      <div className="ui pointing red basic label">
        <div>{error}</div>
      </div>
    );
  }
};

const renderInput = ({ input, label, meta }) => {
  return (
    <div className="eight wide field">
      <label>{label}</label>
      <input {...input} autoComplete="off" />
      {renderError(meta)}
    </div>
  );
};

const WeaponForm = props => {
  const onSubmit = formValues => {
    props.onSubmit(formValues);
  };
  return (
    <form
      onSubmit={props.handleSubmit(onSubmit)}
      style={{ marginTop: "17vh" }}
      className="ui form error"
    >
      <Field name="weapon" component={renderInput} label="Weapon" />
      <Field name="model" component={renderInput} label="Model" />
      <Field name="price" component={renderInput} label="Price" />
      <button className="ui button primary">Submit</button>
      <Link to="/" className="ui button orange">
        Back
      </Link>
      {props.children}
    </form>
  );
};

const validate = formValues => {
  const error = {};
  if (!formValues.weapon) {
    error.weapon = "You must enter a weapon";
  }
  return error;
};

export default reduxForm({ form: "WeaponForm", validate })(WeaponForm);
