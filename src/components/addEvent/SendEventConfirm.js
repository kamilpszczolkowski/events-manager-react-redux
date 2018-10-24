import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SendEventConfirm extends Component {
  hanldeBttnNewEvent() {
    this.props.createNewEvent();
  }
  eventSendConfrimHelperFunc() {
    if (this.props.eventSendSuccess) {
      return (
        <div className="validationPassed">
          <section className="validationPassedPrompt">
            <h2>Event was added to the database</h2>
            <button>
              <Link to="/events">Go to the events</Link>
            </button>
            <button onClick={this.hanldeBttnNewEvent.bind(this)}>
              Add next event
            </button>
          </section>
        </div>
      );
    }
    return null;
  }

  render() {
    return this.eventSendConfrimHelperFunc();
  }
}
