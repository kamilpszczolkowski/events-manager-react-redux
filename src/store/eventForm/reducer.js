import * as types from "./actionTypes";

const initialState = {
  event: {
    date: ["", ""],
    desc: "",
    descShort: "",
    googleGeoLoc: ["", ""],
    googlePosId: "",
    img: "",
    name: "",
    organisation: "",
    place: "",
    type: ""
  },
  formValidErrors: [],
  eventSendSuccess: false,
  editedEvent: false,
  editingFinished: false
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
    case types.START_EVENT_EDITING:
      return { ...state, event: action.event, editedEvent: action.id };
    case types.EVENT_EDITING_FINISHED:
      return { ...state, editingFinished: true };
    default:
      return state;
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

export function chechIfEventEdited(state) {
  return state.eventForm.editedEvent;
}

export function checkIfEditingFinished(state) {
  return state.eventForm.editingFinished;
}
