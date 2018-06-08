import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./home.css";
import SideNav from './sideNav';
import HomeMain from './homeMain';


class Home extends React.Component {

  render() {

    return (
        <Container fluid className="nopadding">
          <Row className="nomargin">
            <Col sm="2" className="nopadding">
              <SideNav />
            </Col>
            <Col sm="10" className="nopadding">
              <HomeMain />
            </Col>
          </Row>
      </Container>
    )
  }
}

export default Home;
