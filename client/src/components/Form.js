import React from "react";
import { Field, reduxForm } from "redux-form";

const renderError = ({ error, touched }) => {
  if (touched && error) {
    return (
      <div className="ui error message">
        <div>{error}</div>
      </div>
    );
  }
};
const renderInput = ({ input, label, meta, type }) => {
  const className = `six wide field ${
    meta.error && meta.touched ? "error" : ""
  }`;
  return (
    <div className={className}>
      <label>{label}</label>
      <input {...input} autoComplete="off" type={type} />
      {renderError(meta)}
    </div>
  );
};
const Form = props => {
  const onSubmit = formValues => {
    props.onSubmit(formValues);
  };

  return (
    <form onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
      <Field name="email" component={renderInput} label="Email" type="text" />
      <Field
        name="password"
        component={renderInput}
        label="Password"
        type="password"
      />
      <button type="submit" className="ui button primary">
        Submit
      </button>
      {props.renderAuthError()}
    </form>
  );
};

const validate = formValues => {
  const error = {};
  if (!formValues.email) {
    error.email = "You must enter a title";
  }
  if (!formValues.password) {
    error.password = "You must enter a description";
  }

  return error;
};

export default reduxForm({ form: "authForm", validate })(Form);
