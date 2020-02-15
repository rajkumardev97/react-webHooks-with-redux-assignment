import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import UsersReducer  from "./users.reducer";
import flashMessage  from "./flashMessage.reducer";

export default combineReducers({
  auth: authReducer, 
  users: UsersReducer,
  flashMessage: flashMessage,  
});
