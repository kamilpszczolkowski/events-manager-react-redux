import * as types from "./actionTypes";
import FirebaseService from "../../services/FirebaseService";

export const eventUpdate = ({ prop, value }) => {
  return {
    type: types.EVENT_UPDATED,
    payload: { prop, value }
  };
};

export const eventCreate = newEvent => {
  //event Validation
  const validationErrors = [];
  const first_date = new Date(newEvent.date[0]);
  const second_date = new Date(newEvent.date[1]);
  if (newEvent.name.length === 0) {
    validationErrors.push("Podaj nazwę wydarzenia");
  }

  if (newEvent.organisation.length === 0) {
    validationErrors.push("Podaj nazwę organizatora");
  }

  if (newEvent.type.length === 0) {
    validationErrors.push("Wybierz rodzaj wydarzenia");
  }

  if (newEvent.date[0].length === 0) {
    validationErrors.push("Podaj datę rozpoczęcia wydarzenia");
  }

  if (newEvent.date[1].length === 0) {
    validationErrors.push("Podaj datę zakończenia wydarzenia");
  }

  if (first_date > second_date) {
    validationErrors.push(
      "Data rozpoczęcia nie może być większa od daty zakończenia"
    );
  }

  if (newEvent.descShort.length === 0) {
    validationErrors.push("Podaj skrócony opis wydarzenia");
  }

  if (newEvent.desc.length === 0) {
    validationErrors.push("Podaj pełny opis wydarzenia");
  }

  if (newEvent.img.length === 0) {
    validationErrors.push("Podaj adres URL do zdjęcia wydarzenia");
  }

  if (newEvent.googlePosId.length === 0) {
    validationErrors.push("Wybierz pozycję dla wydarzenia z map google");
  }

  if (validationErrors.length > 0) {
    return {
      type: types.EVENT_VALIDATION_FAILED,
      validationErrors
    };
  }

  return dispatch => {
    FirebaseService.createEvent(() => {
      dispatch({
        type: types.EVENT_CREATED
      });
    }, newEvent);
  };
};

export const createNewEvent = () => {
  return { type: types.NEW_EVENT_CREATE };
};
