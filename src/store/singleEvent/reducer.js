import * as types from "./actionTypes";

const initialState = {
  eventFetched: {},
  editingMode: false
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.EVENT_FETCHED:
      return { ...state, eventFetched: action.event };
    case types.EVENT_CHANGE_REQUESTED:
      return { ...state, editingMode: true };
    case types.EVENT_DELETED:
      return initialState;
    default:
      return initialState;
  }
}

export function getEventFetched(state) {
  return state.eventForm.eventFetched;
}

export function checkIfEventIsEdited(state) {
  return state.eventForm.editingMode;
}
