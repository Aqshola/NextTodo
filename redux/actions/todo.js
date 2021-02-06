import { ADD_TODO, GET_TODO, REMOVE_TODO, UPDATE_TODO } from "../types";
import { db } from "../../lib/fb";

export const addTodo = (id, value, tag) => async (dispatch) => {
  try {
    await db().collection("todo").add({
      id: id,
      value: value,
      done: false,
      tag: tag,
      date: db.Timestamp.now(),
    });
    dispatch({ type: ADD_TODO });
  } catch (err) {
    console.log(err.message);
  }
};

export const updateTodo = (id, value) => async (dispatch) => {
  try {
    await db().collection("todo").doc(id).update({
      done: value,
    });
    dispatch({ type: UPDATE_TODO });
  } catch (err) {
    console.log(err);
  }
};

export const getTodo = (userId, tag) => async (dispatch) => {
  try {
    await db()
      .collection("todo")
      .where("id", "==", userId)
      .where("tag", "==", tag)
      .orderBy("date", "desc")
      .onSnapshot((todos) => {
        dispatch({
          type: GET_TODO,
          payload: todos.docs,
        });
      });
  } catch (err) {
    console.log(err.message);
  }
};

export const removeTodo = (todoId) => async (dispatch) => {
  try {
    await db().collection("todo").doc(todoId).delete();
    console.log("deleted");
    dispatch({
      type: REMOVE_TODO,
    });
  } catch (err) {
    console.log(err.message);
  }
};
