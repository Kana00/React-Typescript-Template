import * as ReactDOM from "react-dom";
import React from "react";


export default class App extends React.Component<{}, {}> {
  render() {
      return <h1>Hello gg!</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById('react-root'));

// if (module.hot) {
//   // foreach module need to be hot ...
//   module.hot.accept('./youtModule.js', () => {
//     // do something if a module need to be reload
//   });
// }
