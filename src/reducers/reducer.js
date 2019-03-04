import { FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_SUCCESS } from "../constans/actionTypes";
const initialState = {
  images: [],
  loading: false,
  error: null
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        images: state.images.concat(action.payload)
      };

    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        images: []
      };
    default:
      return state;
  }
};
export default rootReducer;
