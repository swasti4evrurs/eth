import React from 'react';
import "./aboutCompany_InDetail.css";
import { Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class AboutCompany_InDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { company_name, company_abbr, company_logo, about_company } = this.props.aboutcompany;


    return (
      <div className="aboutCompany_InDetail">
        <Card>
          <CardBody>
            <Row>
              <div className="wallet_top box">
                <Row>
                  <Col sm="9" className="nopadding">
                    <div>
                      <Breadcrumb>
                        <BreadcrumbItem><a href="#">Overview</a></BreadcrumbItem>
                        <BreadcrumbItem active><CardTitle>{this.props.aboutcompany.company_name}</CardTitle></BreadcrumbItem>
                      </Breadcrumb>
                    </div>
                  </Col>
                  <Col sm="3" className="nopadding">
                    <a href="" className="getintouch">
                      Get in touch
                    </a>
                  </Col>
                </Row>
              </div>
              <div className="wallet_bottom box">
                <div className="wallet_botton_inner box">
                  <Row>
                    <Col sm="3" className="noleft">
                      <CardImg></CardImg>
                      <CardSubtitle>{this.props.aboutcompany.company_abbr}</CardSubtitle>
                      <div className="dot"></div>
                    </Col>
                    <Col sm="9" className="nopadding">
                      <CardText>{this.props.aboutcompany.about_company}</CardText>
                      <div className="tags">
                        <span>STARTUP</span>
                        <span>HEALTH</span>
                        <span>CRYPTO</span>
                        <span>AI</span>
                      </div>
                    </Col>
                  </Row>
                </div>
                <Col className="more box">
                  <Button>See more</Button>
                </Col>
              </div>
            </Row>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default AboutCompany_InDetail;
