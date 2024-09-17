import { createSelector } from "reselect";
import { IUsersDataList } from "./users.types";
import { AppState } from "../store";

const selectUsersReducer = (state:AppState):IUsersDataList => state.users;

export const selectUsersIsLoading = createSelector(
  [selectUsersReducer],
  (usersSlice) => usersSlice.isLoading
);

export const selectUsersData = createSelector(
  [selectUsersReducer],
  (usersSlice) => usersSlice.usersData
);
