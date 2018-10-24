import React, { Component } from "react";

export default class DeleteEventPopup extends Component {
  deleteElPopupHelperFunc() {
    if (this.props.deletePopup) {
      return (
        <div className="deleteEvent">
          <div className="deletePopUp">
            <h2>Do you really want to remove this event?</h2>
            <button onClick={this.handleConfirmDeleteBttn.bind(this)}>
              Yes
            </button>
            <button onClick={this.handleNoConfirmmDeleteBttn.bind(this)}>
              No
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
