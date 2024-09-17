import { combineReducers } from "redux";
import { usersReducer } from "./users/users.reducer";
import { searchInputReducer } from "./searchInput/searchInput.reducer";

export const rootReducer = combineReducers({
  users: usersReducer,
  searchInput: searchInputReducer,  
});
