import React, { useEffect } from "react";

import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getProductsDetails } from "../../actions/users.action";
import Spinner from "../../components/common/Spinner";

const ProductDetail = props => {
  //Todo Show Address listing

  const { productDetails, loading } = props.users;

  useEffect(() => {
    console.log("componentDidMount");
    const slug = props.match.params.slug;
    props.getProductsDetails(slug);
    return () => {
      console.log("componentWillUnmount");
    };
  }, []);

  let ProDetail;
  if (productDetails && productDetails !== null) {
    ProDetail = (
      <div>
        <p className="para-title">Show Product Details Here</p>
        <h3>Slug : {productDetails.slug}</h3>
        <p>Name : {productDetails.slug}</p>
        <p>Price : {productDetails.price}</p>
      </div>
    );
  }

  return (
    <div>
      {loading ? (
        <div style={{ padding: 50 }}>
          <Spinner />
        </div>
      ) : (
        ProDetail
      )}
    </div>
  );
};

ProductDetail.propTypes = {
  getProductsDetails: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  users: state.users
});

export default connect(mapStateToProps, { getProductsDetails })(
  withRouter(ProductDetail)
);
