import { Fragment } from "react";

import SearchInput from "../SearchInput/SearchInput.component";
import { useDispatch, useSelector } from "react-redux";
import { handleSearchInputChange } from "../../redux/searchInput/searchInput.action";
import { selectSearchInputText } from "../../redux/searchInput/searchInput.selectors";

const UserManagementTableHeader = ({ columnHeaders }) => {
  const dispatch = useDispatch();
  const searchInputText = useSelector(selectSearchInputText);

  const onHandleSearchInputChange = (event) => {
    const { name, value } = event.currentTarget;
    dispatch(handleSearchInputChange({ name, value }));
  };
  return (
    <Fragment>
      {columnHeaders.map((columnName, index) => {
        return (
          <th key={index} className="column-header">
            <span>{columnName}</span>
            <SearchInput
              type="text"
              className="search-input"
              name={columnName}
              placeholder={columnName}
              searchInputText={searchInputText}
              onChange={onHandleSearchInputChange}
            />
          </th>
        );
      })}
    </Fragment>
  );
};

export default UserManagementTableHeader;
