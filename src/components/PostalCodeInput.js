import React, { Component } from 'react';

class PostalCodeInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  onPostalCodeUpdate = (e) => {
    e.preventDefault();
    const { value } = e.target;

    this.setState({ value });
    this.props.onUpdatePostCode(value);
  }

  render() {
    return (
      <label>
      Postcode:
        <input value={this.state.value} onChange={this.onPostalCodeUpdate}/>
      </label>
    );
  }
}

export default PostalCodeInput;
