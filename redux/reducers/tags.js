import { ADD_TAG, CHANGE_TAG } from "../types";

const initialState = {
  current_tags: "",
};

export default function tags(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_TAG:
      return {
        ...state,
        current_tags: payload,
      };
    case ADD_TAG:
    default:
      return state;
  }
}
