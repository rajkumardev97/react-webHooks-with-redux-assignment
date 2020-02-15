import { ADDRESS, PRODUCT } from "../shared/constants/actions.constants";

const initialState = {
  currentAddress: null,
  currentProducts: null,
  productDetails: null,
  loading: false,
  addressLoading:false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADDRESS.ADD_ADDRESS:
      return {
        ...state,
        currentAddress: action.payload
      };
    case PRODUCT.GET_ALL_PRODUCT:
      return {
        ...state,
        currentProducts: action.payload
      };
    case PRODUCT.GET_PRODUCT_DETAILS:
      return {
        ...state,
        productDetails: action.payload
      };
    case PRODUCT.GET_PRODUCT_LOADING_START:
      return {
        ...state,
        loading: true
      };
    case PRODUCT.GET_PRODUCT_LOADING_STOP:
      return {
        ...state,
        loading: false
      };
    case ADDRESS.GET_ADDRESS_LOADING_START:
      return {
        ...state,
        addressLoading: true
      };
    case ADDRESS.GET_ADDRESS_LOADING_STOP:
      return {
        ...state,
        addressLoading: false
      };
    default:
      return state;
  }
}
