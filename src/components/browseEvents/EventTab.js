import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class EventTab extends Component {
  static dateExtract(date, place) {
    if (place === "begin") {
      return date.slice(0, 10);
    }
    return date.slice(11, 16);
  }

  distanceRenderHelperFunc() {
    if (!isNaN(this.props.eventDistance)) {
      return (
        <p>
          <strong>Distance:</strong> {this.props.eventDistance.toFixed(2)} km
        </p>
      );
    }
    return null;
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.userPos && isNaN(nextProps.eventDistance)){
      this.props.getEventDistance(
        this.props.userPos[0],
        this.props.userPos[1],
        this.props.googlePos[1],
        this.props.googlePos[0],
        this.props.id
      );
    }
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
              <strong>Organisation:</strong> {organisation}
            </p>
            <p>
              <strong>Place:</strong> {place}
            </p>
            <p>
              <strong>Category:</strong> {type}
            </p>
          </div>
          <div className="col2">
            <p>
              <strong>Start:</strong>{" "}
              <span className="elementDate">
                {EventTab.dateExtract(date[0], "begin")},{" "}
                {EventTab.dateExtract(date[0], "end")}
              </span>
            </p>
            <p>
              <strong>End:</strong>{" "}
              <span className="elementDate">
                {EventTab.dateExtract(date[1], "begin")},{" "}
                {EventTab.dateExtract(date[1], "end")}
              </span>
            </p>
            {this.distanceRenderHelperFunc()}
          </div>
        </Link>
      </article>
    );
  }
}
