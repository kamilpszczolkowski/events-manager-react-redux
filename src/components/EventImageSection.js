import React, { Component } from "react";

export default class EventImageSection extends Component {
  editingModeRender() {
    if (this.props.editingMode) {
      return (
        <div>
          <p>Adres URL obrazu</p>
          <p id="editedImageURL" className="editionMode" contentEditable="true">
            {this.props.imgSrc}
          </p>
        </div>
      );
    }
    return null;
  }
  render() {
    return (
      <section>
        <img className="singleEventImg" src={this.props.imgSrc} />
        {this.editingModeRender()}
      </section>
    );
  }
}
