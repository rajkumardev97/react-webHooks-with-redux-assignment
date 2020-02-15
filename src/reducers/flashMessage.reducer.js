import { NOTIFICATION } from "../shared/constants/actions.constants";

const initialState = {
  message: null,
  className: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NOTIFICATION.FLASH_MESSAGE:
      return action.payload;

    case NOTIFICATION.CLEAR_CURRENT_FLASH_MESSAGE:
      return {
        ...state,
        message: null, //here we set the stock to null
        className: null
      };

    default:
      return state;
  }
};
