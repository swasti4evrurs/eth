import React from 'react';
import "./incorporate.css";
import IncorporateForm from './incorporateForm';



class Incorporate extends React.Component {

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
      <div className="incorporate">
        <IncorporateForm onChange={fields => this.onChange(fields)} />
        <p className="show_details">
          {JSON.stringify(this.state.fields, null, 2)}
        </p>
      </div>
    )
  }
}

export default Incorporate;
