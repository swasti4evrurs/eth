import React from 'react';
import "./legalDocuments.css";
import Ownership_percent from './ownership_percent';

class Ownership extends React.Component {



    constructor() {
        super();
        this.state = {
            ownerships_InPercents: [
                {
                    ownership_code: "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2 (You)",
                    ownership_percent: "43.04"
                },
                {
                    ownership_code: "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2",
                    ownership_percent: "32.91"
                },
                {
                    ownership_code: "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq",
                    ownership_percent: "19.22"
                },
                {
                    ownership_code: "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2 (You)",
                    ownership_percent: "43.04"
                },
                {
                    ownership_code: "1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2",
                    ownership_percent: "32.91"
                },
                {
                    ownership_code: "bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq",
                    ownership_percent: "19.22"
                }
            ]
        }
    }

    render() {
        let ownerships = this.state.ownerships_InPercents.map(ownerships_InPercent => {
            return (
                <Ownership_percent ownerships_InPercent={ownerships_InPercent} />
            )
        })

        return (
            <div className="legalDocuments box">
                <div className="legalDocuments_top box">
                    <h1>Ownership</h1>
                </div>
                <div className="legalDocuments_bottom box">
                    <div className="legalDocuments_bottomInner box">
                        {ownerships}
                    </div>
                </div>
            </div>
        )
    }
}

export default Ownership;
