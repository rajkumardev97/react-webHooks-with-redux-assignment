import React, { useEffect } from "react";

import ReactTable from "react-table";

import "react-table/react-table.css";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getAddress } from "../../actions/users.action";
import Spinner from "../../components/common/Spinner";

const MyAddress = props => {
  //Todo Show Address listing

  const { currentAddress, addressLoading } = props.users;

  useEffect(() => {
    console.log("componentDidMount");
    props.getAddress();
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
      Header: "Address",
      accessor: "address",
      filterable: true,
      Cell: row => (
        <span>
          <center>{row.value}</center>
        </span>
      )
    },
    {
      Header: "City",
      accessor: "city",
      filterable: true,
      Cell: row => (
        <span>
          <center>{row.value}</center>
        </span>
      )
    },
    {
      Header: "Country",
      accessor: "country",
      filterable: true,
      Cell: row => (
        <span>
          <center>{row.value}</center>
        </span>
      )
    },
    {
      Header: "Zip Code",
      accessor: "zip_code",
      filterable: true,
      Cell: row => (
        <span>
          <center>{row.value}</center>
        </span>
      )
    }
  ];

  let AddressTable;
  if (currentAddress && currentAddress.addresses !== null) {
    AddressTable = (
      <div>
        <ReactTable
          data={currentAddress.addresses}
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
      <p className="para-title">Show Your Address Listing Here</p>
      {addressLoading ? (
        <div style={{ padding: 50 }}>
          <Spinner />
        </div>
      ) : (
        AddressTable
      )}
    </div>
  );
};

MyAddress.propTypes = {
  getAddress: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  users: state.users
});

export default connect(mapStateToProps, { getAddress })(withRouter(MyAddress));
