import React, { useState } from "react";

import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/users.action";

const Register = ({ history, ...props }) => {
  const { isAuthenticated, loading } = props.auth;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setconfPassword] = useState("");

  if (isAuthenticated) {
    history.push("/dashboard");
  }

  const handleSubmit = evt => {
    evt.preventDefault();

    const userData = {
      username,
      email,
      password,
      password_confirmation: confPassword,
      first_name: firstName,
      last_name: lastName
    };
    if (username === "") {
      alert("Username Field cannot be empty!!");
    } else if (password === "") {
      alert("Password Field cannot be empty!!");
    } else if (firstName === "") {
      alert("First name Field cannot be empty!!");
    } else if (lastName === "") {
      alert("Last name Field cannot be empty!!");
    } else if (password !== confPassword) {
      alert("Password should be same!!");
    } else {
      props.registerUser(userData, history); //here we call the registerUser action
    }
  };

  return (
    <div>
      <p className="para-title">REGISTER</p>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label for="firstname">
            <b>First Name</b>
          </label>
          <input
            type="type"
            className="form-control"
            placeholder="First Name"
            name="firstName"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <label for="lastname">
            <b>Last Name</b>
          </label>
          <input
            type="type"
            className="form-control"
            placeholder="Last Name"
            name="lastName"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
          <label for="uname">
            <b>Username</b>
          </label>
          <input
            type="type"
            className="form-control"
            placeholder="Username"
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <label for="psw">
            <b>Email</b>
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <label for="psw">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Repeat Password"
            name="confPassword"
            value={confPassword}
            onChange={e => setconfPassword(e.target.value)}
          />
          <br />
          <button type="submit" disabled={loading} className="btn btn-success">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
