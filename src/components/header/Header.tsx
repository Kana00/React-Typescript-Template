import React from 'react';
import './header.scss';
import i18next from 'i18next';
import { connect } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { Query, QueryResult } from "react-apollo";
import gql from "graphql-tag";

const GET_CONTRIES_NAME = gql`
{
  countries {
    name
  }
}`;



class Header extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      responseGraphQL: ''
    };
  }

  componentDidMount() {
    // this.setState({responseGraphQL: value.data.countries[0].name});
  }
  render() {
    return (
      <header className="Site-header">
        <div id="header-bar">
          <h3 id="header-content">
            Header
          </h3>
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
            <li>GraphQL with Apollo</li>
            <li>Unit testing with Jest</li>
            <li>Debugger with VS Code</li>
          </ul>

          <p>Redux demo : {this.props.message}</p>
            <Query query={GET_CONTRIES_NAME}>
              {(response: QueryResult<any, Record<string, any>>)=> {
                if(response.loading) return <p>Loading...</p>
                const random = Math.floor(Math.random() * 250);
                return <p>GraphQL (apollo) demo : {response.data.countries[random].name}</p>
              }}
            </Query>
        </div>
      </header>
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
