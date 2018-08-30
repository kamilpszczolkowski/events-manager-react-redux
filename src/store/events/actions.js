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

export const getUserPosition = () => {
  return dispatch => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        dispatch({
          type: types.USER_POSITION_SET,
          position: [position.coords.latitude, position.coords.longitude]
        });
      });
    } else {
      dispatch({

      })
    }
  };
};
