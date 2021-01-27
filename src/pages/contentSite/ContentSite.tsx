import React from 'react';
import i18next from 'i18next';
import { Query, QueryResult } from 'react-apollo';
import gql from 'graphql-tag';
import { useSelector } from 'react-redux';
import { StoreType } from '../../redux/store';
import { RouteComponentProps } from '@reach/router';

const GET_CONTRIES_NAME = gql`
{
  countries {
    name
  }
}`;

type ContrieResponse = {
  countries: Array<{
    name: string;
  }>
};

interface ContentSiteProps extends RouteComponentProps { }

export function ContentSite(props: ContentSiteProps) {
  const message = useSelector((store: StoreType) => store.rootScreenReducer.message);
  return (
    <div>
      <h1 id="title-site">{i18next.t('Title')}</h1>
      <p>{i18next.t('description_Application')}</p>

      <ul>
        <li>React-scripts (best implementation of webpack)</li>
        <li>TypeScript 4</li>
        <li>React 17</li>
        <li>Sass styling</li>
        <li>Reach Router</li>
        <li>Redux</li>
        <li>i18next</li>
        <li>GraphQL with Apollo</li>
        <li>Unit testing with Jest</li>
        <li>Debugger with VS Code</li>
      </ul>

      <p>Redux demo : {message}</p>
      <Query query={GET_CONTRIES_NAME}>
        {(response: QueryResult<ContrieResponse>) => {
          if (response.loading) return <p>Loading...</p>;
          const random = Math.floor(Math.random() * 250);
          return <p>GraphQL (apollo) demo : {response.data?.countries[random].name}</p>;
        }}
      </Query>
    </div>
  );
}
