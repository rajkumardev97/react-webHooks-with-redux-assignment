import { API_CONSTANTS } from "../shared/constants/api.constants";
import Axios from "axios";

import LocalStorageService from "../shared/utils/LocalStorageService";

import {
  AUTHTYPE,
  ADDRESS,
  PRODUCT
} from "../shared/constants/actions.constants";

import {
  sendFlashMessage,
  clearcurrentFlashMessage
} from "./flashMessage.action";

// LocalstorageService
const localStorageService = LocalStorageService.getService();

export const registerUser = (userData, history) => async dispatch => {
  try {
    dispatch(setuserregLoadingStart());

    const response = await Axios.post(API_CONSTANTS.AUTH.REGISTER, userData);
    const { data } = response;

    alert(data.full_messages[0]);

    dispatch(setuserregLoadingStop());

    history.push("/login");
  } catch (error) {
    dispatch(setuserregLoadingStop());

    console.log("register error is : " + error);
    alert(error);

    dispatch(sendFlashMessage(error, "alert-danger"));

    setTimeout(() => {
      dispatch(clearcurrentFlashMessage());
    }, 2000);
  }
};

// Register loading START
export const setuserregLoadingStart = () => {
  return {
    type: AUTHTYPE.GET_USER_REGISTER_LOADING_START
  };
};
// Register loading STOP
export const setuserregLoadingStop = () => {
  return {
    type: AUTHTYPE.GET_USER_REGISTER_LOADING_STOP
  };
};

export const loginUser = (userData, history) => async dispatch => {
  try {
    dispatch(setuserloginLoadingStart());

    const response = await Axios.post(API_CONSTANTS.AUTH.LOGIN, userData);
    const { data } = response;

    // Save to localStorage
    const { token, user } = data;

    // Set token to local storage
    localStorageService.setToken(token);

    // Set userData to local storage
    localStorageService.setUser(JSON.stringify(user));

    // Set current user
    dispatch(setCurrentUser(user));

    dispatch(setuserloginLoadingStop());

    history.push("/");
  } catch (error) {
    dispatch(setuserloginLoadingStop());

    console.log("login error is : " + error);
    alert(error);

    dispatch(sendFlashMessage(error, "alert-danger"));

    setTimeout(() => {
      dispatch(clearcurrentFlashMessage());
    }, 2000);
  }
};

// Login loading START
export const setuserloginLoadingStart = () => {
  return {
    type: AUTHTYPE.GET_USER_LOGIN_LOADING_START
  };
};
// Login loading STOP
export const setuserloginLoadingStop = () => {
  return {
    type: AUTHTYPE.GET_USER_LOGIN_LOADING_STOP
  };
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    //here we dispatch the reducer
    type: AUTHTYPE.SET_CURRENT_USER,
    payload: decoded
  };
};

//add address
export const addAddress = (addressData, history) => async dispatch => {
  try {
    dispatch(setAddressLoadingStart());

    const response = await Axios.post(
      API_CONSTANTS.ADDRESS.ADD_ADDRESS,
      addressData
    );
    const { data } = response;

    alert(data.full_messages[0]);

    dispatch(setAddressLoadingStop());

    history.push("/address");
  } catch (error) {
    dispatch(setAddressLoadingStop());

    console.log("register error is : " + error);
    alert(error);

    dispatch(sendFlashMessage(error, "alert-danger"));

    setTimeout(() => {
      dispatch(clearcurrentFlashMessage());
    }, 2000);
  }
};

//get address
export const getAddress = () => async dispatch => {
  try {
    dispatch(setAddressLoadingStart());

    const response = await Axios.get(API_CONSTANTS.ADDRESS.GET_ADDRESS);
    const { data } = response;

    // Set current address
    dispatch(setCurrentAddress(data));
    dispatch(setAddressLoadingStop());
  } catch (error) {
    dispatch(setAddressLoadingStop());

    console.log("address error is : " + error);
    alert(error);

    dispatch(sendFlashMessage(error, "alert-danger"));

    setTimeout(() => {
      dispatch(clearcurrentFlashMessage());
    }, 2000);
  }
};

export const setAddressLoadingStart = () => {
  return {
    type: ADDRESS.GET_ADDRESS_LOADING_START
  };
};

export const setAddressLoadingStop = () => {
  return {
    type: ADDRESS.GET_ADDRESS_LOADING_STOP
  };
};

// Set address
export const setCurrentAddress = addressData => {
  return {
    type: ADDRESS.ADD_ADDRESS,
    payload: addressData
  };
};

//get products
export const getProducts = history => async dispatch => {
  try {
    dispatch(setProductLoadingStart());

    const response = await Axios.get(API_CONSTANTS.PRODUCT.GET_PRODUCTS);
    const { data } = response;

    // Set current Product
    dispatch(setCurrentProduct(data));
    dispatch(setProductLoadingStop());
  } catch (error) {
    dispatch(setProductLoadingStop());

    console.log("Product error is : " + error);
    alert(error);

    dispatch(sendFlashMessage(error, "alert-danger"));

    setTimeout(() => {
      dispatch(clearcurrentFlashMessage());
    }, 2000);
  }
};
// Set Products
export const setCurrentProduct = productData => {
  return {
    type: PRODUCT.GET_ALL_PRODUCT,
    payload: productData
  };
};

export const setProductLoadingStart = () => {
  return {
    type: PRODUCT.GET_PRODUCT_LOADING_START
  };
};

export const setProductLoadingStop = () => {
  return {
    type: PRODUCT.GET_PRODUCT_LOADING_STOP
  };
};

//get products details
export const getProductsDetails = slug => async dispatch => {
  try {
    dispatch(setProductLoadingStart());

    const response = await Axios.get(
      API_CONSTANTS.PRODUCT.GET_PRODUCT_DETAIL + `/${slug}`
    );
    const { data } = response;

    // Set current Product details
    dispatch(setCurrentProdDetails(data));
    dispatch(setProductLoadingStop());
  } catch (error) {
    dispatch(setProductLoadingStop());

    console.log("Product error is : " + error);
    alert(error);

    dispatch(sendFlashMessage(error, "alert-danger"));

    setTimeout(() => {
      dispatch(clearcurrentFlashMessage());
    }, 2000);
  }
};

// Set Product Details
export const setCurrentProdDetails = productData => {
  return {
    type: PRODUCT.GET_PRODUCT_DETAILS,
    payload: productData
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  let jwtToken = localStorage.getItem("jwtToken");
  //you are already logged out, if there is no token
  if (!jwtToken) {
    return;
  }

  // Remove token from localStorage
  localStorage.removeItem("jwtToken");

  localStorage.removeItem("userData");

  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  window.location.href = "/login";
};
