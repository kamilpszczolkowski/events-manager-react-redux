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
            <h2>Wydarzenie zostalo dodane do bazy</h2>
            <button>
              <Link to="/events">Przejdź do wydarzeń</Link>
            </button>
            <button onClick={this.hanldeBttnNewEvent.bind(this)}>
              Dodaj kolejne wydarzenie
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
