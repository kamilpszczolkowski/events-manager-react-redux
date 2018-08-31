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
        type: types.USER_POSITION_FAILURE
      });
    }
  };
};

export const getEventDistance = (lat1, lon1, lat2, lon2, eventId) => {
  const deg2rad = deg => {
    return deg * (Math.PI / 180);
  };

  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return {
    type: types.EVENT_DISTANCE_CALCULATED,
    distance,
    eventId
  };
};
