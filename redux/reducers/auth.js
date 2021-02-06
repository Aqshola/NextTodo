import {
  LOAD_USER,
  CLEAR_USER,
  LOGIN_USER,
  LOGOUT_USER,
  AUTH_LOADING,
} from "../types";

const initialState = {
  user: {},
  loading: true,
  islogged: false,
};

export default function auth(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_USER:
    case LOAD_USER:
      return { ...state, user: payload, loading: false, islogged: true };

    case LOGOUT_USER:
    case CLEAR_USER:
      return { ...state, user: {}, loading: false, islogged: false };

    case AUTH_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
