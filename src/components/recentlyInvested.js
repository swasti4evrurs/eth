import React from 'react';
import "./recentlyInvested.css";
import RecentInvests from './recentInvests';
import { Table } from 'reactstrap';

class RecentlyInvested extends React.Component {
  constructor() {
    super();
    this.state = {
      investedcompanies: [
        {
          company_logo: "",
          company_name: "Funholding GmbH",
          company_abbr: "FUN",
          company_content: "When I first got into the online advertising... "
        },
        {
          company_logo: "",
          company_name: "Atlas Holdings Group Inc.",
          company_abbr: "AHGI",
          company_content: "Every new computer that’s brought home… "
        },
        {
          company_logo: "",
          company_name: "Tonik Studio Inc.",
          company_abbr: "TNK",
          company_content: "When I first got into the online advertising... "
        },
        {
          company_logo: "",
          company_name: "Funholding GmbH",
          company_abbr: "FUN",
          company_content: "When I first got into the online advertising... "
        },
        {
          company_logo: "",
          company_name: "Atlas Holdings Group Inc.",
          company_abbr: "AHGI",
          company_content: "Every new computer that’s brought home… "
        },
        {
          company_logo: "",
          company_name: "Tonik Studio Inc.",
          company_abbr: "TNK",
          company_content: "When I first got into the online advertising... "
        }
      ]
    }
  }

  render() {
    let recentInvests = this.state.investedcompanies.map(investedcompany => {
      return (
        <RecentInvests investedcompany={investedcompany} />
      )
    })

    return (
      <div className="recentlyInvested box">
        <div className="recentlyInvested_top box">
          <h1>Recently invested in</h1>
        </div>
        <div className="recentlyInvested_bottom box">
          <Table>
            <tr>              
                {recentInvests}
            </tr>
          </Table>
        </div>
      </div>
    )
  }
}

export default RecentlyInvested;
