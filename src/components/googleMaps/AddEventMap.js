import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class AddEventMap extends Component {
  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    if (this.props && this.props.google) {
      const { google } = this.props;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      const map = new google.maps.Map(node, {
        center: { lat: 52.161653, lng: 19.165485 },
        zoom: 6.5
      });
      const input = document.getElementById("pac-input");
      const autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.bindTo("bounds", map);
      map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

      const infowindow = new google.maps.InfoWindow();
      const infowindowContent = document.getElementById("infowindow-content");
      infowindow.setContent(infowindowContent);
      const marker = new google.maps.Marker({
        map: map
      });

      if(this.props.googlePosId !== ''){
        const markerPos = new google.maps.LatLng({
          lat: Number(this.props.googleGeoLoc[1]),
          lng: Number(this.props.googleGeoLoc[0])
        });

        marker.setPlace({
          placeId: this.props.googlePosId,
          location: markerPos
        });

        map.setCenter(markerPos);
        map.setZoom(10);

        input.value=this.props.place;
      }

      marker.addListener("click", function() {
        infowindow.open(map, marker);
      });
      autocomplete.addListener("place_changed", () => {
        infowindow.close();
        let place = autocomplete.getPlace();

        if (!place.geometry) {
          return;
        }

        if (place.geometry.viewport) {
          map.fitBounds(place.geometry.viewport);
        } else {
          map.setCenter(place.geometry.location);
          map.setZoom(17);
        }
        marker.setPlace({
          placeId: place.place_id,
          location: place.geometry.location
        });
        marker.setVisible(true);

        infowindowContent.children["place-name"].textContent = place.name;
        infowindowContent.children["place-id"].textContent = place.place_id;
        infowindowContent.children["place-address"].textContent =
          place.formatted_address;
        infowindow.open(map, marker);

        this.props.updateData({
          prop: "place",
          value: input.value
        });
        this.props.updateData({
          prop: "googlePosId",
          value: place.place_id
        });
        this.props.updateData({
          prop: "googleGeoLoc",
          value: [place.geometry.location.lng(), place.geometry.location.lat()]
        });
      });
    }
  }

  render() {
    return (
      <section>
        <input
          id="pac-input"
          className="controls"
          type="text"
          placeholder="Enter a location"
        />
        <div ref="map" id="map" />
        <div id="infowindow-content">
          <span id="place-name" className="title" />
          <br />
          Place ID <span id="place-id" />
          <br />
          <span id="place-address" />
        </div>
      </section>
    );
  }
}
