import React from 'react';
import "./wallet_item.css";
import { Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class Waller_item extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { company_name, company_abbr, company_logo, percent_value } = this.props.company;

    return (
      <div className="wallet_item">
        <Card>
          <CardBody>
            <Row>
              <Col sm="3" className="noleft">
                <CardImg src={`../img/${this.props.company.company_logo}.png`} />
                <CardSubtitle>{this.props.company.company_abbr}</CardSubtitle>
                <div className="dot"></div>
              </Col>
              <Col sm="4" className="nopadding ver_center">
                <CardTitle>{this.props.company.company_name}</CardTitle>
              </Col>
              <Col sm="2" className="ver_center nopadding">
                <CardText>{this.props.company.percent_value}
                  <span>%</span>
                </CardText>
              </Col>
              <Col sm="3" className="ver_center nopadding">
                <h4>3 Updates Available</h4>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default Waller_item;
