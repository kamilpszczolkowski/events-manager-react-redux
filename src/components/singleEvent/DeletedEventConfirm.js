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
            <h2>Event has been deleted</h2>
            <p>You will be redirected to the home page</p>
            <button onClick={this.handleBttnClick}>
              <Link to="/">Home page</Link>
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
