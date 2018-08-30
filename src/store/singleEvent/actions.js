import FirebaseService from "../../services/FirebaseService";
import * as types from ".//actionTypes";

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

export const eventEditingRequest = () => {
  return {
    type: types.EVENT_CHANGE_REQUESTED
  };
};

export const eventDeleted = eventId => {
  return dispatch => {
    FirebaseService.deleteEvent(() => {
      dispatch({ type: types.EVENT_DELETED });
    }, eventId);
  };
};