import { createAction } from "../../utils/reducer/reducer";
import { HANDLE_SEARCH_INPUT_CHANGE ,handleSearchInputChangeAction, IPayloadSearchInput} from "./searchInput.types";

export const handleSearchInputChange = (values:IPayloadSearchInput):handleSearchInputChangeAction => {
  return createAction(HANDLE_SEARCH_INPUT_CHANGE, values);
};
