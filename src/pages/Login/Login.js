import React, { useState } from "react";

import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../actions/users.action";

function Login({ history, ...props }) {
  const { isAuthenticated, loading } = props.auth;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (isAuthenticated) {
    history.push("/dashboard");
  }

  const handleSubmit = evt => {
    evt.preventDefault();

    const userData = {
      username,
      password
    };
    if (username === "") {
      alert("Username Field cannot be empty!!");
    } else if (password === "") {
      alert("Password Field cannot be empty!!");
    }

    if (userData.username && userData.password) {
      props.loginUser(userData, history);
    }
  };

  return (
    <div>
      <p className="para-title">LOGIN</p>
      <form onSubmit={handleSubmit}>
        <div className="container">
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
            <b>Password</b>
          </label>
          <input
            type="password"
            className="form-control "
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <br />
          <button type="submit" disabled={loading} className="btn btn-success">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { loginUser })(withRouter(Login));
