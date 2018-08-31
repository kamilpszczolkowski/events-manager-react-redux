import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class AddEventMap extends Component {
  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    if (this.props && this.props.google) {
      const { google } = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map2;
      const node = ReactDOM.findDOMNode(mapRef);
      const map = new google.maps.Map(node, {
        center: { lat: 52.161653, lng: 19.165485 },
        zoom: 6.5
      });
      const marker = new google.maps.Marker({
        map: map
      });
      const markerPos = new google.maps.LatLng({
        lat: Number(this.props.googlePos[1]),
        lng: Number(this.props.googlePos[0])
      });

      marker.setPlace({
        placeId: this.props.googleId,
        location: markerPos
      });

      map.setCenter(markerPos);
      map.setZoom(10);
    }
  }

  render() {
    return (
      <section>
        <div ref="map2" id="map2" />
      </section>
    );
  }
}
