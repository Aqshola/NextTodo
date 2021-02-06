import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { createWrapper } from "next-redux-wrapper";

const initialState = {};
const middleware = [thunk];

const initStore = () => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
};

export const wrapper = createWrapper(initStore);
