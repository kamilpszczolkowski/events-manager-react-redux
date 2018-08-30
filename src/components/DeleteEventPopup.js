import React, { Component } from "react";

export default class DeleteEventPopup extends Component {
  deleteElPopupHelperFunc() {
    if (this.props.deletePopup) {
      return (
        <div className="deleteEvent">
          <div className="deletePopUp">
            <h2>Czy na pewno chcesz usunąć dane wydarzenie?</h2>
            <button onClick={this.handleConfirmDeleteBttn.bind(this)}>
              Tak
            </button>
            <button onClick={this.handleNoConfirmmDeleteBttn.bind(this)}>
              Nie
            </button>
          </div>
        </div>
      );
    }
    return null;
  }

  handleConfirmDeleteBttn() {
    this.props.eventDeleted(this.props.eventId);
  }

  handleNoConfirmmDeleteBttn() {
    this.props.eventDeleteRequestChange(false);
  }

  render() {
    return this.deleteElPopupHelperFunc();
  }
}
