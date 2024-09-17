
export interface IUserData{
  id:number
  name:string,
  username:string,
  email:string,
  phone:string
}
export interface IUsersDataList {
  usersData: Array<IUserData>;
  isLoading: boolean;
  error: string|null;
}
  export const FETCH_USERS_START="users/FETCH_USERS_START";
  export const FETCH_USERS_SUCCESS= "users/FETCH_USERS_SUCCESS";
  export const FETCH_USERS_FAILED="users/FETCH_USERS_FAILED";
  
  // so we are exporting each actions in typescript format
  
  export interface fetchUsersStartAction {
    type: typeof FETCH_USERS_START;
    payload: string;
  }
  
  export interface fetchUsersSuccessAction {
    type: typeof FETCH_USERS_SUCCESS;
    payload: Array<IUserData>;
  }
  
  export interface fetchUsersFailedAction {
    type: typeof FETCH_USERS_FAILED;
    payload: string;
  }
  
  
  // here we making the aggregation all these typescript actions
  // for that I am using the union operator or OR  operator.
  
  export type usersActionTypes =
    | fetchUsersStartAction
    | fetchUsersSuccessAction
    | fetchUsersFailedAction
 