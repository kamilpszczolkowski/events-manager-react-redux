import React, { Component } from "react";
import { InputField } from "./common";

export default class SearchField extends Component {
  handleSubmit = event => {
    event.preventDefault();
    window.location.replace("#/events");
  };

  render() {
    return (
      <section className="search">
        <h2>Znajdź najciekawsze wydarzenia w Polsce</h2>
        <form onSubmit={this.handleSubmit}>
          <InputField
            placeholder="Czego szukasz?"
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
