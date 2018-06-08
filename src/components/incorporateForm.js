import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "./forms.css";
import { Button, Form, Label, Input, FormText, InputGroupAddon, InputGroup } from 'reactstrap';
import { FilePond, File, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

class IncorporateForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      focused: false,
      input: '',
      files: [null]
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }

  state = {
    company_legal_name: "",
    company_STK_symbol: "",
    long_description: ""
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = () => {
    console.log(this.state);
    //this.props.onSubmit(this.state)
    this.setState({
      company_legal_name: "",
      company_STK_symbol: "",
      long_description: ""
    });
    this.props.onChange({
      company_legal_name: "",
      company_STK_symbol: "",
      long_description: ""
    });
  };

  handleInputChange(evt) {
    this.setState({ input: evt.target.value });
  }

  handleInputKeyDown(evt) {
    if (evt.keyCode === 13) {
      const { value } = evt.target;

      this.setState(state => ({
        items: [...state.items, value],
        input: ''
      }));
    }

    if (this.state.items.length && evt.keyCode === 8 && !this.state.input.length) {
      this.setState(state => ({
        items: state.items.slice(0, state.items.length - 1)
      }));
    }
  }

  handleRemoveItem(index) {
    return () => {
      this.setState(state => ({
        items: state.items.filter((item, i) => i !== index)
      }));
    }
  }

  handleInit() {
    console.log('FilePond instance has initialised', this.pond);
  }

  render() {

    return (
      <div className="forms">
        <Container fluid className="nopadding">
          <Row className="nomargin">
            <a href="/home" className="back">
              <span>«</span>
              Back to the dashboard
          </a>
            <Col sm={{ size: 4, offset: 4 }} className="nopadding">
              <div className="logo">
                <h1>
                  <span><img src={require('../img/logo.png')} alt="logo" /></span>
                  ethcompanies
                </h1>
              </div>
              <div className="form_section box">
                <Form className="incorporate_only box">
                  <FormText>Incorporate in 2 minutes, using the form below</FormText>
                  <div className="form_main box">
                    <div className="form_main_inner box">
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <img src={require('../img/company_name.svg')} alt="logo" />
                        </InputGroupAddon>
                        <Input
                          type="text"
                          name="company_legal_name"
                          required={true}
                          value={this.state.company_legal_name}
                          onChange={e => this.change(e)}
                        />
                        <span className="floating-label">COMPANY LEGAL NAME</span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <img src={require('../img/STK_symbol.svg')} alt="logo" />
                        </InputGroupAddon>
                        <Input
                          type="text"
                          name="company_STK_symbol"
                          required={true}
                          value={this.state.company_STK_symbol}
                          onChange={e => this.change(e)}
                        />
                        <span className="floating-label">Company STK symbol...</span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroupAddon className="txtarea_add" addonType="prepend">
                          <img src={require('../img/description.svg')} alt="logo" />
                        </InputGroupAddon>
                        <Input
                          type="textarea"
                          name="long_description"
                          required={true}
                          value={this.state.long_description}
                          onChange={e => this.change(e)}
                        />
                        <span className="floating-label">Long description...</span>
                      </InputGroup>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <img src={require('../img/tag.svg')} alt="logo" />
                        </InputGroupAddon>
                        <label>
                          <ul>
                            <Input
                              value={this.state.input}
                              onChange={this.handleInputChange}
                              required={true}
                              onKeyDown={this.handleInputKeyDown} />
                            <span className="floating-label">Tags</span>
                            {this.state.items.map((item, i) =>
                              <li key={i} onClick={this.handleRemoveItem(i)}>
                                {item}
                                <span>x</span>
                              </li>
                            )}
                          </ul>
                        </label>
                      </InputGroup>
                      <div className="box">
                        <FilePond ref={ref => this.pond = ref}
                          allowMultiple={true}
                          maxFiles={50}
                          oninit={() => this.handleInit()}>
                          {this.state.files.map(file => (
                            <File key={file} source={file} />
                          ))}
                        </FilePond>
                      </div>
                    </div>
                    <div className="form_main_btm box">
                      <Button className="btns" onClick={() => this.onSubmit()}>Confirm and incorporate</Button>
                    </div>
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

export default IncorporateForm;
