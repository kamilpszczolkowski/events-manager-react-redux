import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import AddEventMap from "./AddEventMap";

class AddEventMapApp extends Component {
  render() {
    return (
      <div>
        <AddEventMap
          google={this.props.google}
          updateData={this.props.updateData}
        />
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAF0dMnU6SE60S3AJT1t7UpWTbVgZI_5CQ"
})(AddEventMapApp);
