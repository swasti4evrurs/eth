import React from 'react';
import "./document.css";

class Document extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {

    let { document_name } = this.props.legal_document;
    
    return (
      <div className="document">
          <h1>{this.props.legal_document.document_name}
            <a href="#">See on Blockchain</a>
          </h1>
      </div>
    )
  }
}

export default Document;
