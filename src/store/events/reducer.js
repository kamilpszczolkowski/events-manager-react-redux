import * as types from "./actionTypes";

const initialState = {
  eventsFetched: {},
  userPos: false
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.EVENTS_FETCHED:
      return { ...state, eventsFetched: action.events };
    case types.USER_POSITION_SET:
      return { ...state, userPos: [action.position[0], action.position[1]] };
    case types.USER_POSITION_FAILURE:
      return { ...state, userPos: false };
    default:
      return state;
  }
}

export function getEventsFetched(state) {
  const { eventsFetched } = state.events;
  const eventsArray = [];
  let sortedArray = [],
    filteredArray = [];
  //Transfrom object with evnets as objects to array with events as objects
  for (let key in eventsFetched) {
    const newElement = { id: key };
    for (let newKey in eventsFetched[key]) {
      newElement[newKey] = eventsFetched[key][newKey];
    }
    eventsArray.push(newElement);
  }
  //Sort array by chosen sorting criteria
  switch (state.filters.sortMethod) {
    case "namesAsc":
      sortedArray = eventsArray.sort((a, b) => {
        if (a.name < b.name) return 1;
        if (a.name > b.name) return -1;
        return 0;
      });
      break;
    case "namesDesc":
      sortedArray = eventsArray.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
      break;
    case "datesAsc":
      sortedArray = eventsArray.sort((a, b) => {
        if (a.date < b.date) return 1;
        if (a.date > b.date) return -1;
        return 0;
      });
      break;
    case "datesDesc":
      sortedArray = eventsArray.sort((a, b) => {
        if (a.date > b.date) return 1;
        if (a.date < b.date) return -1;
        return 0;
      });
      break;
    default:
      sortedArray = eventsArray;
  }

  //Filter events by search phrase
  const searchPhraseLoCase = state.filters.searchText.toLowerCase();
  if (searchPhraseLoCase !== "") {
    filteredArray = sortedArray.filter(el => {
      return (
        el.name.toLowerCase().indexOf(searchPhraseLoCase) !== -1 ||
        el.descShort.toLowerCase().indexOf(searchPhraseLoCase) !== -1 ||
        el.type.toLowerCase().indexOf(searchPhraseLoCase) !== -1 ||
        el.place.toLowerCase().indexOf(searchPhraseLoCase) !== -1
      );
    });
  } else filteredArray = sortedArray;
  return filteredArray;
}

export function checkUserPosition(state) {
  return state.events.userPos;
}
