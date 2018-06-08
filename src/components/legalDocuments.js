import React from 'react';
import "./legalDocuments.css";
import Document from './document';

class LegalDocuments extends React.Component {



    constructor() {
        super();
        this.state = {
            legal_documents: [
                {
                    document_name: "Incorporation documents"
                },
                {
                    document_name: "Very important contract"
                },
                {
                    document_name: "Another very important contract"
                },
                {
                    document_name: "Incorporation documents"
                },
                {
                    document_name: "Very important contract"
                },
                {
                    document_name: "Another very important contract"
                }
            ]
        }
    }

    render() {
        let documents = this.state.legal_documents.map(legal_document => {
            return (
                <Document legal_document={legal_document} />
            )
        })

        return (
            <div className="legalDocuments box">
                <div className="legalDocuments_top box">
                    <h1>Legal documents on the Blockchain</h1>
                </div>
                <div className="legalDocuments_bottom box">
                    <div className="legalDocuments_bottomInner box">
                        {documents}
                    </div>
                </div>
            </div>
        )
    }
}

export default LegalDocuments;
