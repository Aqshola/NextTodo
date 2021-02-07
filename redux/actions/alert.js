import { CREATE_ALERT, REMOVE_ALERT } from "../types";

export const setAlert = (value, type) => async (dispatch) => {
  dispatch({
    type: CREATE_ALERT,
    payload: {
      ...value,
      type,
    },
  });
};

export const removeAlert = () => async (dispatch) => {
  dispatch({ type: REMOVE_ALERT });
};
