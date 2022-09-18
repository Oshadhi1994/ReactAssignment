/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./login.css";
import Logo from "../../home/header/Logo.png";
import useForm from "../../hooks/useForm";

const Loginform = ({submitForm}) => {
  const {onSubmitForm, onUpdateField, values, errors} = useForm(submitForm);
  return (
    <div className="MainContainer">
      <div className="colm">
        <div className="FormContainer">
          <img src={Logo} className="brand-logo" alt="" />
          <hr className="line"></hr>
          <form className="main" onSubmit={onSubmitForm}>
            <div className="formGroup">
              Email
              <input
                className="formField"
                type="email"
                name="email"
                value={values.email}
                onChange={onUpdateField}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="formGroup">
              Password
              <input
                className="formField"
                type="password"
                name="password"
                value={values.password}
                onChange={onUpdateField}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className="formAction">
              <button className="formSubmitBtn" type="submit">
                Login User
              </button>
            </div>
          </form>
          <div className="text-divider">OR</div>
          <a className="forgotpassword">
            Forgot Password?
          </a>
        </div>
        <div className="FormContainer">
          <a className="signup">
            Don't have an account? Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Loginform;
