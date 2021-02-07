import { CREATE_ALERT, REMOVE_ALERT } from "../types";

const initialState = {
  alert: {},
  isAlert: false,
};

export default function alert(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case CREATE_ALERT:
      return {
        ...state,
        alert: payload,
        isAlert: true,
      };
    case REMOVE_ALERT: {
      return {
        ...state,
        isAlert: false,
        alert: {},
      };
    }
    default:
      return state;
  }
}
