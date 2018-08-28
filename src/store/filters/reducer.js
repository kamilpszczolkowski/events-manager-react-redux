import * as types from "./actionTypes";

const initialState = {
  searchText: "",
  sortMethod: "namesDesc"
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.SEARCH_TEXT_CHANGED:
      return { ...state, searchText: action.searchText };
    case types.SORT_METHOD_CHANGED:
      return { ...state, sortMethod: action.sortMethod };
    default:
      return state;
  }
}

export function getCurrentSearchText(state) {
  return state.filters.searchText;
}

export function getCurrentSortMethod(state) {
  return state.filters.sortMethod;
}
