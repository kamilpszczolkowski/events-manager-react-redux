import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class DeletedEventConfirm extends Component {
  eventDeletedHelperFunc() {
    if (this.props.eventDeletedConfrim) {
      this.timeout = setTimeout(() => {
        window.location.href = "/";
      }, 3000);
      return (
        <div className="EventDeleted">
          <section>
            <h2>Wydarzenie zostalo usunięte</h2>
            <p>Nastąpi przekierowanie do strony głównej</p>
            <button onClick={this.handleBttnClick}>
              <Link to="/">Strona główna</Link>
            </button>
          </section>
        </div>
      );
    }
    return null;
  }

  componentWillUnmount(){
      clearTimeout(this.timeout);
  }

  render() {
    return this.eventDeletedHelperFunc();
  }
}
