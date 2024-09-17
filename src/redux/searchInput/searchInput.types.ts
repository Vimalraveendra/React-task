
export interface ISearchInput{
  searchInputText:IPayloadSearchInput|{}
  columnName:string,
}
export interface IPayloadSearchInput{
  name:string,
  value:string
}


export const HANDLE_SEARCH_INPUT_CHANGE="searchInput/SET_SEARCH_INPUT_CHANGE";

export interface handleSearchInputChangeAction {
  type: typeof HANDLE_SEARCH_INPUT_CHANGE;
  payload:IPayloadSearchInput
}