import { authFire, db } from "../../lib/fb";
import {
  AUTH_LOADING,
  CLEAR_USER,
  LOAD_USER,
  LOGIN_USER,
  LOGOUT_USER,
} from "../types";

export const logIn = ({ email, password }) => async (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  try {
    await authFire().signInWithEmailAndPassword(email, password);
    dispatch({ type: LOGIN_USER });
  } catch (err) {
    dispatch({ type: CLEAR_USER });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    authFire().onAuthStateChanged(async (user) => {
      if (user) {
        await db()
          .collection("users")
          .doc(user.uid)
          .onSnapshot((data) => {
            dispatch({
              type: LOAD_USER,
              payload: {
                id: user.uid,
                ...data.data(),
              },
            });
          });
      } else {
        dispatch(clearUser());
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export const logOut = () => async (dispatch) => {
  try {
    await authFire().signOut();
    dispatch({ type: LOGOUT_USER });
  } catch (err) {
    console.log(err);
  }
};

export const clearUser = () => async (dispatch) => {
  dispatch({ type: CLEAR_USER });
};
