import React from "react";

import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/users.action";

import styles from "./Navbar.module.scss";

const Navbar = props => {
  const { isAuthenticated, user } = props.auth;

  const onLogoutClick = e => {
    e.preventDefault();
    props.logoutUser(props.history);
  };

  const guestLinks = (
    <div className="guestLinksSection">
      <Link className={styles.item} to={"/register"}>
        Register
      </Link>
      <Link className={styles.item} to={"/login"}>
        Login
      </Link>
    </div>
  );
  const authLinks = (
    <div className="authLinksSection">
      <li className="nav-item">
        <span className="userGreet">Hi, {user.username}</span>
      </li>
      <Link className={styles.item} to={"/products"}>
        Products
      </Link>
      <Link className={styles.item} to={"/add/address"}>
        Add Address
      </Link>
      <Link className={styles.item} to={"/address"}>
        Addresses
      </Link>
      <li className="nav-item" onClick={onLogoutClick}>
        Logout
      </li>
    </div>
  );
  return (
    <div className={styles.container}>
      <div className={styles.itemContainer}>
        {isAuthenticated ? authLinks : guestLinks}
      </div>
    </div>
  );
};

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));
