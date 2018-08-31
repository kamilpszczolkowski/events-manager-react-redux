import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class AllEventMap extends Component {
  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    const { google, events } = this.props;
    if (this.props && google) {
      const { google } = this.props;
      const mapRef = this.refs.map3;
      const node = ReactDOM.findDOMNode(mapRef);
      const map = new google.maps.Map(node, {
        center: { lat: 52.161653, lng: 19.165485 },
        zoom: 6.3
      });

      if (events !== false) {
        for (let element in events) {
          const marker = new google.maps.Marker({
            map: map,
            title: events[element].name
          });

          const posX = events[element].googleGeoLoc[0];
          const posY = events[element].googleGeoLoc[1];
          const markerPos = new google.maps.LatLng({
            lat: Number(posY),
            lng: Number(posX)
          });

          marker.setPlace({
            placeId: events[element].googlePosId,
            location: markerPos
          });

          const imgSource = "src=" + events[element].img;

          const contentString =
            '<article class="singleElement singleElMap">' +
            "<a href=#/events/" +
            events[element].id +
            "/>" +
            "<img " +
            imgSource +
            ' alt="obrazek"/>' +
            '<div class="mainElements">' +
            "<h2>" +
            events[element].name +
            "</h2>" +
            "<p>" +
            events[element].descShort +
            "</p>" +
            "</div>" +
            '<div class="col1">' +
            "<p><strong>Organizator:</strong> " +
            events[element].organisation +
            "</p>" +
            "<p><strong>Miejsce:</strong> " +
            events[element].place +
            "</p>" +
            "<p><strong>Kategoria:</strong> " +
            events[element].type +
            "</p>" +
            "</div>" +
            '<div class="col2">' +
            '<p><strong>Rozpoczęcie:</strong> <span className="elementDate">' +
            events[element].date[0].slice(0, 10) +
            ", " +
            events[element].date[0].slice(11, 16) +
            "</span>" +
            "</p>" +
            '<p><strong>Zakończenie:</strong> <span className="elementDate">' +
            events[element].date[1].slice(0, 10) +
            ", " +
            events[element].date[1].slice(11, 16) +
            "</span>" +
            "</p>" +
            "</div>" +
            "</a>" +
            "</article>";

          const infowindow = new google.maps.InfoWindow({
            content: contentString
          });

          marker.addListener("click", function() {
            infowindow.open(map, marker);
          });
        }
      }
    }
  }

  render() {
    return (
      <section>
        <div ref="map3" id="map3" />
      </section>
    );
  }
}
