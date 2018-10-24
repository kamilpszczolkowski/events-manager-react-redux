import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class EditedEventConfirm extends Component {
  eventEditedHelperFunc() {
    const { editingFinished, editingEvent } = this.props;

    if (editingFinished) {
      this.timeout = setTimeout(() => {
        window.location.href = "#/events/" + editingEvent;
      }, 3000);
      return (
        <div className="EventDeleted">
          <section>
            <h2>Changes were saved</h2>
            <p>You will be redirected to the event page</p>
            <button>
              <Link to={"/events/" + editingEvent}>Go to the event</Link>
            </button>
          </section>
        </div>
      );
    }
    return null;
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return this.eventEditedHelperFunc();
  }
}
