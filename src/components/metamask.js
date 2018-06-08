import React from 'react';
import "./incorporate.css";
import EnableMetaMask from './enableMetaMask';


class MetaMask extends React.Component {

  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render() {

    return (
      <div className="metaMask">
        <EnableMetaMask />
      </div>
    )
  }
}

export default MetaMask;
