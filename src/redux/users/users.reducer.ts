import { usersActionTypes,IUsersDataList,
  FETCH_USERS_START,FETCH_USERS_SUCCESS,FETCH_USERS_FAILED } from "./users.types";

export const USERS_INITIAL_STATE = {
  isLoading: false,
  usersData: [],
  error: null,
};

export const usersReducer = (state = USERS_INITIAL_STATE, action:usersActionTypes):IUsersDataList => {
 
  switch (action.type) {
    case FETCH_USERS_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        usersData: action.payload,
      };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        isLoading: false,
        error:action.payload,
      };
    default:
      return state;
  }
};
