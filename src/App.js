import React from "react";
import Axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from "./actions/users.action";
import store from "./store/store.config";

import LocalStorageService from "./shared/utils/LocalStorageService";

import AppRouter from "./components/AppRouter/AppRouter";
import Navbar from "./components/NavBar/Navbar";
import styles from "./App.module.scss";

// LocalstorageService
const localStorageService = LocalStorageService.getService();

// Add a request interceptor
Axios.interceptors.request.use(
  config => {
    const token = localStorageService.getAccessToken();
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

//Add a response interceptor
Axios.interceptors.response.use(
  response => {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

if (localStorage.jwtToken) {
  const userData = localStorageService.getUser();
  if (userData) {
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(JSON.parse(userData)));
  }
  const token = localStorageService.getAccessToken();
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "/login";
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className={styles.container}>
          <Navbar />
          <AppRouter />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
