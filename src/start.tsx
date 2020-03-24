import * as ReactDOM from "react-dom";
import React from "react";
import { hot } from 'react-hot-loader/root';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/header/Header';
import Error404 from './components/Error404/Error404';
import './i18n/language';

import './assets/styles/global.scss';

class App extends React.Component<any, {}> {
  constructor(props: any) {
    super(props);
    // this.props.history.push('/foo');
  }

  componentDidMount() {
    document.title = 'React Application';
  }

  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Switch>
            <Route exact path="/" />
            <Route path="*" component={Error404} />
          </Switch>
        </Provider>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(React.createElement(hot(App)), document.getElementById('react-root'));
