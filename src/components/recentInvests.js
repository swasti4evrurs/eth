import React from 'react';
import "./recentInvests.css";
import { Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class RecentInvests extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { company_name, company_abbr, company_logo, company_content} = this.props.investedcompany;
    return (
      <td className="recent_invests">
          <Card>
            <CardBody>
              <Row>
                <Col sm="4" className="noleft">
                  <CardImg></CardImg>
                  <CardSubtitle>{this.props.investedcompany.company_abbr}</CardSubtitle>
                </Col>
                <Col sm="8" className="nopadding">
                  <CardTitle>{this.props.investedcompany.company_name}</CardTitle>
                  <CardText>
                    {this.props.investedcompany.company_content}
                    <a href="/company">Read more</a>
                  </CardText>
                </Col>
              </Row>
            </CardBody>
          </Card>
      </td>
    )
  }
}

export default RecentInvests;
