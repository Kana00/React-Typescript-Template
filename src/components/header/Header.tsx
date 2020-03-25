import React from 'react';
import { Link } from '@reach/router';
import './header.scss';

export default class Header extends React.Component<any, any> {
  render() {
    return (
      <header className="Site-header">
        <div id="header-bar">
          <div id="header-content">
            <div className="part-one">
              <h3 >Header</h3>
              <div className="link-box">
                <Link to="/" className="link-in-block">View 1</Link>
                <Link to="team" className="link-in-block">View 2</Link>
              </div>
            </div>
            <div className="part-two">
              <Link to='connexion' className="link-in-block">connexion user</Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
