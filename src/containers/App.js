import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { columnFilteredData } from "../utils/table/columnFilter.js";

import {
  selectUsersIsLoading,
  selectUsersData,
} from "../redux/users/users.selectors";
import { fetchUsersAsync } from "../redux/users/users.action";
import {
  selectColumnName,
  selectSearchInputText,
} from "../redux/searchInput/searchInput.selectors";

import UserManagementTable from "../components/UserManagementTable/UserManagementTable.component";
import Spinner from "../components/Spinner/Spinner.component";

import "./App.css";
import { useAppDispatch } from "../components/hooks/hooks";

const App = () => {
  const isLoading = useSelector(selectUsersIsLoading);
  const usersData = useSelector(selectUsersData);
  const searchInputText = useSelector(selectSearchInputText);
  const columnName = useSelector(selectColumnName);
  const dispatch = useAppDispatch();

  const filteredUsers = columnFilteredData(
    usersData,
    searchInputText,
    columnName
  );

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Spinner />
      ) : (
        <UserManagementTable usersData={filteredUsers} />
      )}
    </div>
  );
};

export default App;
