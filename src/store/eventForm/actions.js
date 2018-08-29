import FirebaseService from "../../services/FirebaseService";
import * as types from "../eventForm/actionTypes";

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
