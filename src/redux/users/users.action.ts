import { createAction } from "../../utils/reducer/reducer";
import { usersActionTypes,
  FETCH_USERS_START,FETCH_USERS_SUCCESS,FETCH_USERS_FAILED,IUserData
} from "./users.types";
import { Dispatch } from "redux";
import { AppState } from "../store";

export const fetchUsersStart = ():usersActionTypes => {
  return createAction(FETCH_USERS_START);
};
export const fetchUsersSuccess = (usersData:Array<IUserData>):usersActionTypes => {
  return createAction(FETCH_USERS_SUCCESS, usersData);
};
export const fetchUsersFailed = (error:string):usersActionTypes => {
  return createAction(FETCH_USERS_FAILED, error);
};

export const fetchUsersAsync = () => async (dispatch:Dispatch<usersActionTypes>,
  getState: () => AppState) => {
  dispatch(fetchUsersStart());
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersData = await response.json();
    dispatch(fetchUsersSuccess(usersData));
  } catch (error) {
    if(typeof error==="string"){
      dispatch(fetchUsersFailed(error));
    }
    
  }
};
