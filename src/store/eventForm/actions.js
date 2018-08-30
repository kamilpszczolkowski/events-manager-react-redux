import * as types from "./actionTypes";
import FirebaseService from "../../services/FirebaseService";

export const eventUpdate = ({ prop, value }) => {
  return {
    type: types.EVENT_UPDATED,
    payload: { prop, value }
  };
};

export const eventCreate = newEvent => {
  return dispatch => {
    FirebaseService.createEvent(() => {
      dispatch({
        type: types.EVENT_CREATED
      });
    }, newEvent);
  };
};
