import * as types from "./actionTypes";

export const searchTextChanged = searchText => {
  return {
    type: types.SEARCH_TEXT_CHANGED,
    searchText
  };
};
