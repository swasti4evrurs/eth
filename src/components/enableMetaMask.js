import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./forms.css";
import { Button, Form, Label, Input, FormText, InputGroupAddon, InputGroup } from 'reactstrap';


class EnableMetaMask extends React.Component {  

    render() {

        return (
            <div className="forms">
                <Container fluid className="nopadding">
                    <Row className="nomargin">
                        <Col sm={{ size: 4, offset: 4 }} className="nopadding">
                            <div className="logo">
                                <h1>
                                    <span><img src={require('../img/logo.png')} alt="logo" /></span>
                                    ethcompanies
                                </h1>
                            </div>
                            <div className="form_section">
                                <Form>
                                    <FormText>Enable MetaMask or Ledger</FormText>
                                    <div className="form_main">
                                    <p>Install and run Meta Mask or Ledger inorder to trade, 
                                        manage, and track you various stock investments
                                    </p>
                                        <Button className="btns" >Install MetaMask Extension</Button>
                                        <Button className="btns" >Install Ledger Extension</Button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default EnableMetaMask;
