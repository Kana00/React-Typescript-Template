import React from 'react';
import './footer.scss';

export default class Footer extends React.Component<{}, {}> {
  render() {
    return (
      <footer className="Site-footer">
        <div className="footer-content">
          <h3 className="footer-centered-text">Footer</h3>
          <p className="footer-centered-text">Copyright (c) Kana00 Licensed under the MIT license.</p>
        </div>
      </footer>
    );
  }
}
