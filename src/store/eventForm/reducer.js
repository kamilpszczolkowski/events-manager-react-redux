import * as types from "./actionTypes";

const initialState = {
  eventFetched: {}
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.EVENT_FETCHED:
      return { ...state, eventFetched: action.event };
    default:
      return initialState;
  }
}

export function getEventFetched(state) {
    return state.eventForm.eventFetched;
}