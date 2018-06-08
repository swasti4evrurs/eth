import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./forms.css";
import { Button, Form, Input, FormText, InputGroupAddon, InputGroup } from 'reactstrap';
import ReactFormWithConstraints from '../../node_modules/react-form-with-constraints';

import { FormWithConstraints, FieldFeedbacks, FieldFeedback } from '../../node_modules/react-form-with-constraints';

class Signup_form extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.contactSubmit = this.contactSubmit.bind(this);
    }

    handleChange(e) {
        this.form.validateFields(e.currentTarget);
    }

    contactSubmit(e) {
        e.preventDefault();

        this.form.validateFields();

        if (!this.form.isValid()) {
            console.log('form is invalid: do not submit');
        } else {
            console.log('form is valid: submit');
        }
    }

    render() {

        return (
            <div className="forms box">
                <Container fluid className="nopadding">
                    <Row className="nomargin">
                        <Col sm={{ size: 4, offset: 4 }} className="nopadding">
                            <div className="logo">
                                <h1>
                                    <span><img src={require('../img/logo.png')} alt="logo" /></span>
                                    ethcompanies
                                </h1>
                            </div>
                            <div className="form_section box">
                                <FormWithConstraints ref={form => this.form = form} onSubmit={this.contactSubmit} noValidate>
                                    <FormText>Join ETHcompanies and get your shares today</FormText>
                                    <div className="form_main box">
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <img src={require('../img/company_name.svg')} alt="logo" />
                                            </InputGroupAddon>
                                            <Input
                                                type="text"
                                                name="email"
                                                required={true}
                                                onChange={this.handleChange}
                                            />
                                            <FieldFeedbacks for="email">
                                                <FieldFeedback when="*">This is a required field</FieldFeedback>
                                            </FieldFeedbacks>
                                            <span className="floating-label">EMAIL ADDRESS</span>
                                        </InputGroup>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <img src={require('../img/STK_symbol.svg')} alt="logo" />
                                            </InputGroupAddon>
                                            <Input
                                                type="text"
                                                name="name"
                                                required={true}
                                                onChange={this.handleChange}
                                            />
                                            <FieldFeedbacks for="name">
                                                <FieldFeedback when="*">This is a required field</FieldFeedback>
                                            </FieldFeedbacks>
                                            <span className="floating-label">Name…</span>
                                        </InputGroup>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <img src={require('../img/description.svg')} alt="logo" />
                                            </InputGroupAddon>
                                            <Input
                                                type="password"
                                                name="password"
                                                required={true}
                                                minLength={6}
                                                pattern="(?=.*\d)(?=.*[a-z]).{6,}"
                                                onChange={this.handleChange}
                                            />
                                            <FieldFeedbacks for="password">
                                                <FieldFeedback when="*">This is a required field</FieldFeedback>
                                            </FieldFeedbacks>
                                            <span className="floating-label">Password…</span>
                                        </InputGroup>
                                        <Button className="btns">Sign up</Button>
                                    </div>
                                </FormWithConstraints>
                            </div>
                            <div className="signin box">
                                <h3>
                                    Already have an account?
                                    <a href="#"> Sign in</a>
                                </h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Signup_form;
