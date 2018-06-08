import React from 'react';
import "./homeMain.css";
import { Row, Col } from 'reactstrap';
import MyWallet from './myWallet';
import CompanyUpdates from './companyUpdates';
import RecentlyInvested from './recentlyInvested';

class HomeMain extends React.Component {

  render() {

    return (
      <div className="homeMain">
        <Row className="nomargin">
          <Col sm="7" className="nopadding mr_right">
            <div className="myWallet_outer box">
              <MyWallet />
            </div>
          </Col>
          <Col sm="5" className="nopadding">
            <CompanyUpdates />
          </Col>
          <Col sm="12" className="nopadding">
            <RecentlyInvested />
          </Col>
        </Row>
      </div>
    )
  }
}

export default HomeMain;
