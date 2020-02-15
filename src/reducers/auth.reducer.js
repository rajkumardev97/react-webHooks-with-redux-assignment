import isEmpty from "../validation/is-empty";

import { AUTHTYPE } from "../shared/constants/actions.constants";

const initialState = {
  isAuthenticated: false,
  loading: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTHTYPE.GET_USER_REGISTER_LOADING_START:
      return {
        ...state,
        userloginloading: true
      };
    case AUTHTYPE.GET_USER_REGISTER_LOADING_STOP:
      return {
        ...state,
        userloginloading: false
      };
    case AUTHTYPE.GET_USER_LOGIN_LOADING_START:
      return {
        ...state,
        userloginloading: true
      };
    case AUTHTYPE.GET_USER_LOGIN_LOADING_STOP:
      return {
        ...state,
        userloginloading: false
      };
    case AUTHTYPE.SET_CURRENT_USER: //IF THE ACTION dispatch SET_CURRENT_USER type
      return {
        ...state, //here we return current state
        isAuthenticated: !isEmpty(action.payload), //here we check the that the payload is send by setCurrentUser from the authActions.js  if its not empty its mean the payload is filled or it has user data then user should be authenticated
        user: action.payload //here we set the user object with fill payload
      };

    default:
      return state;
  }
}
