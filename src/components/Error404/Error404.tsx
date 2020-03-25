import React from 'react';
import './error404.scss';


export default class Error404 extends React.Component<any,any> {
  render() {
    return (
      <div id="container-error">
        <h1 className="title-error-code">404</h1>
        <h4 className="title-error-description">Page Not Found</h4>
      </div>
    );
  }
}
