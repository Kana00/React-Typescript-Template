import * as ReactDOM from "react-dom";
import React from "react";
import { hot } from 'react-hot-loader/root';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './components/header/Header';
import Error404 from './components/Error404/Error404';
import './i18n/language';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import './assets/styles/global.scss';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://countries.trevorblades.com/'
});

const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link
});

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
        <ApolloProvider client={apolloClient}>
          <Provider store={store}>
            <Header />
            <Switch>
              <Route exact path="/" />
              <Route path="*" component={Error404} />
            </Switch>
          </Provider>
        </ApolloProvider>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(React.createElement(hot(App)), document.getElementById('react-root'));
