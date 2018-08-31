import FirebaseService from "../../services/FirebaseService";
import * as types from "./actionTypes";

export const eventFetched = eventId => {
  return dispatch => {
    FirebaseService.getEvents(event => {
      dispatch({
        type: types.EVENT_FETCHED,
        event
      });
    }, eventId);
  };
};

export const eventDeleteRequestChange = val => {
  return {
    type: types.EVENT_DELETE_REQUESTED,
    val
  };
};

export const eventDeleted = eventId => {
  return dispatch => {
    FirebaseService.deleteEvent(() => {
      dispatch({ type: types.EVENT_DELETED });
    }, eventId);
  };
};

export const eventCleared = () => {
  return { type: types.EVENT_CLEARED };
};
