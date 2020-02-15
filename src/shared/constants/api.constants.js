const API_BASE_URL = "http://apitest.partsplusmore.com";

export const API_CONSTANTS = {
  AUTH: {
    LOGIN: `${API_BASE_URL}/api/auth/login`,
    REGISTER: `${API_BASE_URL}/api/users`
  },
  PRODUCT: {
    GET_PRODUCTS: `${API_BASE_URL}/api/products`,
    GET_PRODUCT_DETAIL: `${API_BASE_URL}/api/products`
  },
  ADDRESS: {
    ADD_ADDRESS: `${API_BASE_URL}/api/users/addresses`,
    GET_ADDRESS: `${API_BASE_URL}/api/users/addresses`
  }
};
