import { NOTIFICATION } from "../shared/constants/actions.constants";

export const sendFlashMessage = (message, className) => {
  return {
    type: NOTIFICATION.FLASH_MESSAGE,
    payload: {
      message,
      className
    }
  };
};

export const clearcurrentFlashMessage = () => {
  return {
    type: NOTIFICATION.CLEAR_CURRENT_FLASH_MESSAGE
  };
};
