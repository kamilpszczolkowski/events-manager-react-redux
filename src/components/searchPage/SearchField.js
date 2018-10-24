import React, { Component } from "react";
import { InputField } from "../common";

export default class SearchField extends Component {
  handleSubmit = event => {
    event.preventDefault();
    window.location.replace("#/events");
  };

  render() {
    return (
      <section className="search">
        <h2>Find interesting events in your region</h2>
        <form onSubmit={this.handleSubmit}>
          <InputField
            placeholder="What are you looking for?"
            id="mainSearch"
            value={this.props.textValue}
            onChangeFunc={this.props.textChange}
          />
          <input id="mainBttnSearch" type="submit" value="" />
        </form>
      </section>
    );
  }
}
