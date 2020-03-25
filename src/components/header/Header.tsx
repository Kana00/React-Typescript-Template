import React from 'react';
import './header.scss';
import i18next from 'i18next';
import { connect } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from "graphql-tag";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'https://countries.trevorblades.com/'
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link
});

class Header extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = {
      responseGraphQL: ''
    }
  }

  componentDidMount() {
    client.query({query: gql`
    {
      countries {
        name
      }
    }
    `}).then((value: any) => {
      this.setState({responseGraphQL: value.data.countries[0].name});
    });
  }
  render() {
    return (
      <div>
        <div id="header-bar">
          <div id="header-content">
            Website Title
          </div>
        </div>

        <div className='content'>
          <h1 id="title-site">{i18next.t('Title')}</h1>
          <p>{i18next.t('description Application')}</p>

          <ul>
            <li>Webpack 4</li>
            <li>TypeScript 3</li>
            <li>React 16</li>
            <li>Sass styling</li>
            <li>React Router</li>
            <li>Redux</li>
            <li>i18next</li>
            <li>Unit testing with Jest</li>
            <li>Debugger with VS Code</li>
          </ul>

          <p>Redux demo : {this.props.message}</p>
          <p>GraphQL (apollo) demo : {this.state.responseGraphQL}</p>
        </div>
        <hr className='hr' />
      </div>
    );
  }
}

const mapStateToProps = (state: AppDispatch) => {
  return {
    message: state.rootScreenReducer.message
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     onTodoClick: id => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }
const HeaderConnect = connect(mapStateToProps)(Header);
export default HeaderConnect;
