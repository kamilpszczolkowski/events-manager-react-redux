import * as types from "./actionTypes";
import FirebaseService from "../../services/FirebaseService";

export const eventsFetched = () => {
  return dispatch => {
    FirebaseService.getEvents(events => {
      dispatch({
        type: types.EVENTS_FETCHED,
        events
      });
    });
  };
};
