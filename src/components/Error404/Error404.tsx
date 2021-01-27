import { RouteComponentProps } from '@reach/router';
import React from 'react';
import './error404.scss';

interface Error404Props extends RouteComponentProps { }

export function Error404(props: Error404Props) {
  return (
    <div id="container-error">
      <h1 className="title-error-code">404</h1>
      <h4 className="title-error-description">Page Not Found</h4>
    </div>
  );
}
