import React, { Component } from "react";

export default class SortTab extends Component {
  handleNameClick = () => {
    this.props.changeSortMethod("names", this.props.sortMethod);
  };

  handleDateClick = () => {
    this.props.changeSortMethod("dates", this.props.sortMethod);
  };

  nameHelperElement = () => {
    const { sortMethod } = this.props;
    if (sortMethod === "namesAsc") {
      return <div className="sortUp">></div>;
    } else if (sortMethod === "namesDesc") {
      return <div className="sortDown">></div>;
    } else {
      return null;
    }
  };

  dateHelperElement = () => {
    const { sortMethod } = this.props;
    if (sortMethod === "datesAsc") {
      return <div className="sortUp">></div>;
    } else if (sortMethod === "datesDesc") {
      return <div className="sortDown">></div>;
    } else {
      return null;
    }
  };

  render() {
    return (
      <section className="sortPanel">
        <div className="sortCol1">
          <h2 id="sortTitle">Sortowanie:</h2>
        </div>
        <div className="sortCol2" onClick={this.handleNameClick}>
          Nazwa
          {this.nameHelperElement()}
        </div>
        <div className="sortCol3" onClick={this.handleDateClick}>
          Data
          {this.dateHelperElement()}
        </div>
      </section>
    );
  }
}
