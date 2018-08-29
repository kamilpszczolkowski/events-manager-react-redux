const FIREBASE_ENDPOINT =
  "https://wydarzenia-b6ffc.firebaseio.com/lista_wydarzen";

export default class FirebaseService {
  static getEvents = (callback, id = "") => {
    let url;
    if (id === "") {
      url = `${FIREBASE_ENDPOINT}.json`;
    } else {
      url = `${FIREBASE_ENDPOINT}/${id}.json`;
    }
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(
            "Network error - can't connect to the Firebase Server"
          );
        }
      })
      .then(jsonResponse => {
        if (typeof callback === "function") {
          callback(jsonResponse);
        } else {
          throw new Error("Callback isn't a function");
        }
      });
  };
}
