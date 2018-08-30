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
            <h2>Zmiany zostały zapisane</h2>
            <p>Nastąpi przekierowanie do strony wydarzenia</p>
            <button>
              <Link to={"/events/" + editingEvent}>Idź do wydarzenia</Link>
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
