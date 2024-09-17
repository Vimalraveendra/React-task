import { handleSearchInputChangeAction, HANDLE_SEARCH_INPUT_CHANGE, ISearchInput} from "./searchInput.types";

const SEARCH_INPUT_INITIAL_STATE = {
  searchInputText:{},
  columnName: "",
};

export const searchInputReducer = (
  state = SEARCH_INPUT_INITIAL_STATE,
  action:handleSearchInputChangeAction
) :ISearchInput=> {
  switch (action.type) {
    case HANDLE_SEARCH_INPUT_CHANGE:
      const { name, value } = action.payload;
      return {
        ...state,
        columnName: name,
        searchInputText: { ...state.searchInputText, [name]: value },
      };
    default:
      return state;
  }
};
