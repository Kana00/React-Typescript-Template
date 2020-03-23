import * as ReactDOM from "react-dom";
import React from "react";
import { hot } from 'react-hot-loader/root';

class App extends React.Component<{}, {}> {
  render() {
      return (
        <div>
          <h1>Hello React!</h1>
        </div>
      );
  }
}

ReactDOM.render(React.createElement(hot(App)), document.getElementById('react-root'));
