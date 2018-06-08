import React from 'react';
import "./menu.css";
import { Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="menu">
        <Nav>
          <NavItem>
            <NavLink href="/home">
              <span><img src={require('../img/home.svg')} alt="incorporate" /></span>
              Overview
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/incorporate">
              <span><img src={require('../img/incorporate.svg')} alt="incorporate" /></span>
              Incorporate
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              <span><img src={require('../img/profile.svg')} alt="profile" /></span>
              Profile
            </NavLink>
          </NavItem>
          <div className="last_two box">
            <NavItem>
              <NavLink href="#">
                <span><img src={require('../img/help.svg')} alt="help" /></span>
                Help
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <span><img src={require('../img/logout.svg')} alt="logout" /></span>
                Log out
              </NavLink>
            </NavItem>
          </div>
        </Nav>

      </div>
    )
  }
}

export default Menu;
