import React from 'react';
import "./document.css";

class Ownership_percent extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {

    let { ownership_code, ownership_percent } = this.props.ownerships_InPercent;
    
    return (
      <div className="document">
          <h1>{this.props.ownerships_InPercent.ownership_code}
            <span>{this.props.ownerships_InPercent.ownership_percent}
              <span className="percent"> %</span>
            </span>
          </h1>
      </div>
    )
  }
}

export default Ownership_percent;
