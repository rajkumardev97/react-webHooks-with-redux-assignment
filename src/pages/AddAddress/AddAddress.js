import React, { useState } from "react";

import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addAddress } from "../../actions/users.action";

const AddAddress = ({ history, ...props }) => {
  const { loading } = props.auth;
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [zip_code, setZipCode] = useState("");

  const handleSubmit = evt => {
    evt.preventDefault();

    const addressData = {
      city,
      country,
      address,
      zip_code
    };
    if (city === "") {
      alert("City Field cannot be empty!!");
    } else if (country === "") {
      alert("Country Field cannot be empty!!");
    } else if (address === "") {
      alert("Address Field cannot be empty!!");
    } else if (zip_code === "") {
      alert("Zip Code Field cannot be empty!!");
    } else {
      props.addAddress(addressData, history);
    }
  };

  return (
    <div>
      <p className="para-title">Add Address Here</p>
     
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label for="uname">
            <b>City</b>
          </label>
          <input
            type="text"
            placeholder="City"
            className="form-control"
            name="city"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
          <label for="uname">
            <b>Country</b>
          </label>
          <input
            type="text"
            placeholder="country"
            className="form-control"
            name="country"
            value={country}
            onChange={e => setCountry(e.target.value)}
          />
          <label for="psw">
            <b>address</b>
          </label>
          <input
            type="text"
            placeholder="Some address"
            className="form-control"
            name="address"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
          <label for="psw">
            <b>zip_code</b>
          </label>
          <input
            type="text"
            placeholder="zip_code"
            className="form-control"
            name="zip_code"
            value={zip_code}
            onChange={e => setZipCode(e.target.value)}
          />
          <br />
          <button type="submit" disabled={loading} className="btn btn-success">
            Address
          </button>
        </div>
      </form>
    </div>
  );
};

AddAddress.propTypes = {
  addAddress: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addAddress })(withRouter(AddAddress));
