import React, { Component } from "react";

export default class SearchField extends Component {
  handleInputChange = event => {
    this.props.textChange(event.target.value);
  };

  handleSubmit = event => {
    event.preventDefault();
    window.location.replace("#/events");
  };

  render() {
    return (
      <section className="search">
        <h2>Znajdź najciekawsze wydarzenia w Polsce</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            id="mainSearch"
            type="text"
            placeholder="Czego szukasz?"
            value={this.props.textValue}
            onChange={this.handleInputChange}
          />
          <input id="mainBttnSearch" type="submit" value="" />
        </form>
      </section>
    );
  }
}
