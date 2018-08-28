import React, { Component } from "react";

class InputField extends Component {
  handleInputChange = event => {
    this.props.onChangeFunc(event.target.value);
  };

  render() {
    const { placeholder, id, value } = this.props;
    return (
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={this.handleInputChange}
      />
    );
  }
}

export default InputField;
