import React from 'react';
import "./update.css";
import { Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class Update extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { company_name, update_title, company_abbr, update_image, update_content, company_icon, update_time } = this.props.update;
    return (
      <div className="update_section">
        <Card>
          <CardBody>
            <Row>
              <Col sm="4" className="noleft">
                <CardImg></CardImg>
                <CardSubtitle>{this.props.update.company_abbr}</CardSubtitle>
              </Col>
              <Col sm="8" className="nopadding">
                <CardTitle>{this.props.update.update_title}</CardTitle>
                <p className="company_names">
                  <span className="company_icons"></span>
                  {this.props.update.company_name}
                  <span className="update_times">
                    {this.props.update.update_time}
                  </span>
                </p>
                <CardText>{this.props.update.update_content}</CardText>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default Update;
