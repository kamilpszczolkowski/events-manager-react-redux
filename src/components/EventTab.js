import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class EventTab extends Component {
  static dateExtract(date, place) {
    if (place === "begin") {
      return date.slice(0, 10);
    }
    return date.slice(11, 16);
  }

  render() {
    const {
      id,
      img,
      name,
      descShort,
      organisation,
      place,
      type,
      date
    } = this.props;

    return (
      <article className="singleElement">
        <Link to={"/events/" + id}>
          <img src={img} alt="obrazek" />
          <div className="mainElements">
            <h2>{name}</h2>
            <p>{descShort}</p>
          </div>
          <div className="col1">
            <p>
              <strong>Organizator:</strong> {organisation}
            </p>
            <p>
              <strong>Miejsce:</strong> {place}
            </p>
            <p>
              <strong>Kategoria:</strong> {type}
            </p>
          </div>
          <div className="col2">
            <p>
              <strong>Rozpoczęcie:</strong>{" "}
              <span className="elementDate">
                {EventTab.dateExtract(date[0], "begin")},{" "}
                {EventTab.dateExtract(date[0], "end")}
              </span>
            </p>
            <p>
              <strong>Zakończenie:</strong>{" "}
              <span className="elementDate">
                {EventTab.dateExtract(date[1], "begin")},{" "}
                {EventTab.dateExtract(date[1], "end")}
              </span>
            </p>
          </div>
        </Link>
      </article>
    );
  }
}
