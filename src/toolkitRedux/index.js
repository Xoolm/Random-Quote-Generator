import { combineReducers, configureStore } from "@reduxjs/toolkit";
import quoteMachine from "./toolkitSlice";

const rootReducer = combineReducers({
  toolkit: quoteMachine,
});

export const store = configureStore({
  reducer: rootReducer,
});
