import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import AllEventMap from "./AllEventMap.js";

class AllEventMapApp extends Component {
  render() {
    return (
      <div>
        <AllEventMap google={this.props.google} events={this.props.events} />
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAF0dMnU6SE60S3AJT1t7UpWTbVgZI_5CQ"
})(AllEventMapApp);
