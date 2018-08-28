import * as types from "./actionTypes";

const initialState = {
  searchText: "",
  orderBy: "namesDesc"
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.SEARCH_TEXT_CHANGED:
      return { ...state, searchText: action.searchText };
    default:
      return state;
  }
}

export function getCurrentSearchText(state){
    return state.filters.searchText;
}