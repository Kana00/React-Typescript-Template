import * as ReactDOM from "react-dom";
import React from "react";
import { hot } from 'react-hot-loader/root';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import Header from './components/header/Header';
import Error404 from './components/Error404/Error404';

import './global.scss';

class App extends React.Component<any, {}> {
  constructor(props:any) {
    super(props);
    // this.props.history.push('/foo');
  }

  componentDidMount() {
    document.title = 'React Application';
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" />
          <Route path="*" component={Error404}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(React.createElement(hot(App)), document.getElementById('react-root'));
