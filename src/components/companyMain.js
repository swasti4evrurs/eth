import React from 'react';
import "./companyMain.css";
import { Row, Col } from 'reactstrap';
import AboutCompany_InDetail from './aboutCompany_InDetail'
import CompanyUpdates from './companyUpdates'
import LegalDocuments from './legalDocuments'
import Ownership from './ownership'

class CompanyMain extends React.Component {

  constructor() {
    super();
    this.state = {
      aboutcompanies: [
        {
          company_logo: "HOT",
          company_name: "Atlas Holdings Group Inc.",
          company_abbr: "AHGI",
          about_company: "Living in today’s metropolitan world of cellular phones, mobile computers and other high-tech gadgets is not just hectic but very impersonal. We make money and then invest our time and effort in making more money…"
        }
      ]
    }
  }

  render() {

    let aboutCompany_InDetails = this.state.aboutcompanies.map(aboutcompany => {
      return (
        <AboutCompany_InDetail aboutcompany={aboutcompany} />
      )
    })

    return (
      <div className="companyMain">
        <Row className="nomargin">
          <Col sm="7" className="nopadding mr_right">
            <div className="comp_mid box">
              { aboutCompany_InDetails}
              <LegalDocuments />
              <Ownership /> 
            </div>
          </Col>
          <Col sm="5" className="nopadding">
            <CompanyUpdates />
          </Col>
        </Row>
      </div >
    )
  }
}

export default CompanyMain;
