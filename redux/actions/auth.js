import { authFire, db } from "../../lib/fb";
import {
  AUTH_LOADING,
  CLEAR_USER,
  LOAD_USER,
  LOGIN_USER,
  LOGOUT_USER,
  SIGNUP_USER,
} from "../types";
import { changeTag } from "../actions/tags";

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
  dispatch({ type: AUTH_LOADING });
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
        dispatch(changeTag("personal"));
      } else {
        dispatch(clearUser());
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export const signUp = ({ email, password, name }) => async (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  try {
    const createUser = await authFire().createUserWithEmailAndPassword(
      email,
      password
    );

    await createUser.user.updateProfile({
      displayName: name,
    });

    await db()
      .collection("users")
      .doc(createUser.user.uid)
      .set({
        name: createUser.user.displayName,
        created: Date.now(),
        tags: ["personal", "work"],
      });

    dispatch({ type: SIGNUP_USER });
  } catch (err) {
    dispatch({ type: CLEAR_USER });
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
