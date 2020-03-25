import * as ReactDOM from "react-dom";
import React from "react";
import { hot } from 'react-hot-loader/root';
import store from './redux/store';
import { Provider } from 'react-redux';
import { Router } from "@reach/router";
import Header from './components/header/Header';
import ContentSite from './components/contentSite/ContentSite';
import Footer from './components/footer/Footer';
import Error404 from './components/error404/Error404';
import './i18n/language';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import './assets/styles/global.scss';
import './assets/styles/site_structure.scss';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://countries.trevorblades.com/'
});

const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link
});


class App extends React.Component<any, {}> {


  componentDidMount() {
    document.title = 'React Application';
  }

  render() {
    return (

      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <div className="Site">
            <Header />
            <div className="Site-content">
                <Router className="content">
                  <ContentSite path="/" />
                  <Error404 path="*" />
                </Router>
            </div>
            <Footer />
          </div>
        </Provider>
      </ApolloProvider>
    );
  }
}

ReactDOM.render(React.createElement(hot(App)), document.getElementById('react-root'));
