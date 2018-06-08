import React from 'react';
import "./company.css";
import { Container, Row, Col } from 'reactstrap';
import SideNav from './sideNav';
import CompanyMain from './companyMain';

class Company extends React.Component {

  render() {

    return (
      <div className="company">
        <Container fluid className="nopadding">
          <Row className="nomargin">
            <Col sm="2" className="nopadding">
              <SideNav />
            </Col>
            <Col sm="10" className="nopadding">
              <CompanyMain />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Company;
