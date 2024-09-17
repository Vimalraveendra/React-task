import { compose, legacy_createStore, applyMiddleware } from "redux";
import{thunk, ThunkMiddleware } from "redux-thunk";
import logger from "redux-logger";


import { rootReducer } from "./root-reducer";
import { usersActionTypes } from "./users/users.types";


export type AppStore = typeof store
export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch']  


const middlewares = [thunk as ThunkMiddleware<AppState, usersActionTypes>, logger];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
const composeEnhancers = compose(applyMiddleware(...middlewares));

export const store = legacy_createStore(
  rootReducer,
  undefined,
  composeEnhancers
);
