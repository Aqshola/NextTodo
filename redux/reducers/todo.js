import { ADD_TODO, GET_TODO, REMOVE_TODO, UPDATE_TODO } from "../types";

const initialState = {
  todo: [],
  loading: true,
};

export default function todo(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO:
      return { ...state, loading: false };
    case GET_TODO: {
      return { ...state, todo: payload, loading: false };
    }
    case UPDATE_TODO:
    case REMOVE_TODO: {
      return { ...state, loading: false };
    }
    default:
      return state;
  }
}
