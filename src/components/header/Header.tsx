import React from 'react';
import './header.scss';
import i18next from 'i18next';

export default class Header extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h2>{i18next.t('Title')}</h2>
        <p>{i18next.t('description Application')}</p>
        <ul>
          <li>Webpack 4</li>
          <li>TypeScript 3</li>
          <li>React 16</li>
          <li>Sass styling</li>
          <li>React Router</li>
          <li>Redux</li>
          <li>i18next</li>
          <li>Debugger with VS Code</li>
        </ul>
        <hr className='hr' />
      </div>
    );
  }
}
