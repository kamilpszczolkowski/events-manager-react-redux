import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import AddEventMap from "./AddEventMap";

class AddEventMapApp extends Component {
  render() {
    const { google, updateData, googlePosId, googleGeoLoc, place } = this.props;
    return (
      <div>
        <AddEventMap
          google={google}
          updateData={updateData}
          googlePosId={googlePosId}
          googleGeoLoc={googleGeoLoc}
          place={place}
        />
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAF0dMnU6SE60S3AJT1t7UpWTbVgZI_5CQ"
})(AddEventMapApp);
