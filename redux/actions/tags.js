import { ADD_TAG, CHANGE_TAG, REMOVE_TAG } from "../types";
import { db } from "../../lib/fb";

export const changeTag = (tag) => async (dispatch) => {
  dispatch({
    type: CHANGE_TAG,
    payload: tag,
  });
};

export const addTag = (userId, tag) => async (dispatch) => {
  try {
    db()
      .collection("users")
      .doc(userId)
      .update({
        tags: db.FieldValue.arrayUnion(tag),
      });
    dispatch({
      type: ADD_TAG,
    });
  } catch (err) {
    console.log(err);
  }
};

export const removeTag = (userId, tag) => async (dispatch) => {
  try {
    const dataTodo = await db()
      .collection("todo")
      .where("id", "==", userId)
      .where("tag", "==", tag)
      .get();

    const batch = db().batch();

    dataTodo.forEach((data) => {
      batch.delete(data.ref);
    });

    await db()
      .collection("users")
      .doc(userId)
      .update({
        tags: db.FieldValue.arrayRemove(tag),
      });

    dispatch({
      type: REMOVE_TAG,
    });

    return batch.commit();
  } catch (err) {
    console.log(err);
  }
};
