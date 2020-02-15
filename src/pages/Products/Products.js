import React, { useEffect } from "react";

import ReactTable from "react-table";

import "react-table/react-table.css";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getProducts } from "../../actions/users.action";
import Spinner from "../../components/common/Spinner";

const Products = props => {
  //Todo Show Address listing

  const { currentProducts, loading } = props.users;

  useEffect(() => {
    console.log("componentDidMount");
    props.getProducts();
    return () => {
      console.log("componentWillUnmount");
    };
  }, []);

  const columns = [
    {
      Header: "Sno",
      maxWidth: 50,
      accessor: "index",
      filterable: false,
      Cell: row => (
        <span>
          <center>{row.index + 1}</center>
        </span>
      )
    },
    {
      Header: "Name",
      accessor: "name",
      filterable: true,
      Cell: row => (
        <span>
          <center>{row.value}</center>
        </span>
      )
    },
    {
      Header: "Price",
      accessor: "price",
      filterable: true,
      Cell: row => (
        <span>
          <center>{row.value}</center>
        </span>
      )
    },
    {
      Header: "Slug",
      accessor: "slug",
      filterable: true,
      Cell: row => (
        <span>
          <center>
            <Link to={`product/${row.value}`}>{row.value}</Link>
          </center>
        </span>
      )
    }
  ];

  let ProductsTable;
  if (currentProducts && currentProducts.products !== null) {
    ProductsTable = (
      <div>
        <ReactTable
          data={currentProducts.products}
          columns={columns}
          defaultPageSize={10}
          showPaginationBottom={true}
          pageSizeOptions={[5, 10, 15, 20]}
          className="-striped -highlight"
        />
        )}
      </div>
    );
  }

  return (
    <div>
      <p className="para-title">Show Products Listing Here</p>
      {loading ? (
        <div style={{ padding: 50 }}>
          <Spinner />
        </div>
      ) : (
        ProductsTable
      )}
    </div>
  );
};

Products.propTypes = {
  getProducts: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  users: state.users
});

export default connect(mapStateToProps, { getProducts })(withRouter(Products));
