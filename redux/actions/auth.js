import { authFire, db } from "../../lib/fb";
import { LOAD_USER, LOGIN_USER } from "../types";

export const logIn = ({ email, password }) => async (dispatch) => {
  try {
    await authFire().signInWithEmailAndPassword(email, password);

    dispatch({ type: LOGIN_USER });
  } catch (err) {
    console.log(err);
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    authFire().onAuthStateChanged(async (user) => {
      if (user) {
        console.log("Loaded");
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
        console.log("No user");
      }
    });
  } catch (err) {
    console.log(err);
  }
};
