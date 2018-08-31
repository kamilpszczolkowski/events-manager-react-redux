import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import EventMap from "./EventMap";

class EventMapApp extends Component {
  render() {
    const { google, googleId, googlePos } = this.props;
    return (
      <div>
        <EventMap google={google} googleId={googleId} googlePos={googlePos} />
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAF0dMnU6SE60S3AJT1t7UpWTbVgZI_5CQ"
})(EventMapApp);
