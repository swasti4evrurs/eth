import React from 'react';
import "./sideNav.css";
import Menu from './menu';

class SideNav extends React.Component {

  render() {

    return (
      <div className="sideNav">
        <div className="sideNav_inner">
          <div className="logo">
            <h1>
              <span><img src={require('../img/logo.png')} alt="logo" /></span>
              ethcompanies
            </h1>
          </div>
          <div className="discover">
            <a href="">Discover companies</a>
          </div>
          <div className="sidemenu">
              <Menu />
          </div>
        </div>
      </div>
    )
  }
}

export default SideNav;
