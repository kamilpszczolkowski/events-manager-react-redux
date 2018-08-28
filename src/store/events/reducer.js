import * as types from "./actionTypes";

const initialState = {
  events: {}
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.EVENTS_FETCHED:
      return { ...state, events: action.events };
    default:
      return state;
  }
}
