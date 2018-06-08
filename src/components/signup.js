import React from 'react';
import "./incorporate.css";
import Signup_form from './signup_form';


class Signup extends React.Component {

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
      <div className="signup">
        <Signup_form onChange={fields => this.onChange(fields)} />
        <p className="show_details">
          {JSON.stringify(this.state.fields, null, 2)}
        </p>
      </div>
    )
  }
}

export default Signup;
