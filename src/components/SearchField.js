import React, { Component } from "react";

export default class SearchField extends Component {
  handleInputChange = (event) => {
    this.props.textChange(event.target.value);
  };

  render() {
    return (
      <section className="search">
        <h2>Znajdź najciekawsze wydarzenia w Polsce</h2>
        <form>
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
