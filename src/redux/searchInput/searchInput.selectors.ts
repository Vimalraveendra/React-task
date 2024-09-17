import { createSelector } from "reselect"; 
import { AppState } from "../store";
import { ISearchInput } from "./searchInput.types";

const selectSearchInputReducer = (state:AppState):ISearchInput => state.searchInput;

export const selectSearchInputText = createSelector(
  [selectSearchInputReducer],
  (searchInput) => searchInput.searchInputText
);

export const selectColumnName = createSelector(
  [selectSearchInputReducer],
  (searchInput) => searchInput.columnName
);
