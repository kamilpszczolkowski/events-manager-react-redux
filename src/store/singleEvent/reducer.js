import * as types from "./actionTypes";

const initialState = {
  eventFetched: {},
  deleteRequested: false,
  eventDeleteSuccess: false
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.EVENT_FETCHED:
      return { ...state, eventFetched: action.event };
    case types.EVENT_DELETE_REQUESTED:
      return { ...state, deleteRequested: action.val };
    case types.EVENT_DELETED:
      return { ...state, eventDeleteSuccess: true };
    default:
      return initialState;
  }
}

export function getEventFetched(state) {
  return state.singleEvent.eventFetched;
}

export function checkIfEventDeleteRequested(state) {
  return state.singleEvent.deleteRequested;
}

export function checkIfEventDeleted(state) {
  return state.singleEvent.eventDeleteSuccess;
}
