import * as types from "./actionTypes";
import { EVENT_CREATED } from "./actionTypes";

const initialState = {
  event: {
    date: ['',''],
    desc: "",
    descShort: "",
    googleGeoLoc: ["19.025382300000047", "50.23185869999999"],
    googlePosId: "ChIJtctXsgbPFkcRiQVI2aUbWIo",
    img: "",
    name: "",
    organisation: "",
    place: "Muchowiec, Katowice, Poland",
    type: ""
  },
  formValidErrors: [],
  eventSendSuccess: false
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.EVENT_UPDATED:
      const eventInside = state.event;
      return {
        ...state,
        event: { ...eventInside, [action.payload.prop]: action.payload.value }
      };
    case types.EVENT_CREATED:
      return { ...initialState, eventSendSuccess: true };
    case types.EVENT_VALIDATION_FAILED:
      return { ...state, formValidErrors: action.validationErrors };
    case types.NEW_EVENT_CREATE:
      return initialState;
    default:
      return initialState;
  }
}

export function getEditedEventData(state) {
  return state.eventForm.event;
}

export function getValidationErrors(state) {
  return state.eventForm.formValidErrors;
}

export function getEventSendConfirm(state) {
  return state.eventForm.eventSendSuccess;
}
