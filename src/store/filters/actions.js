import * as types from "./actionTypes";

export const searchTextChanged = searchText => {
  return {
    type: types.SEARCH_TEXT_CHANGED,
    searchText
  };
};

export const sortMethodChanged = (newSortCriteria, sortMethod) => {
  let newSortMethod;
  if (newSortCriteria === "names") {
    switch (sortMethod) {
      case "namesAsc":
        newSortMethod = "namesDesc";
        break;
      case "namesDesc":
        newSortMethod = "namesAsc";
        break;
      default:
        newSortMethod = "namesDesc";
    }
  } else {
    switch (sortMethod) {
      case "datesAsc":
        newSortMethod = "datesDesc";
        break;
      case "datesDesc":
        newSortMethod = "datesAsc";
        break;
      default:
        newSortMethod = "datesDesc";
    }
  }
  return {
    type: types.SORT_METHOD_CHANGED,
    sortMethod: newSortMethod
  };
};
