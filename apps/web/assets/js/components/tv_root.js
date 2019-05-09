import React, { Component, Fragment } from 'react';
import {Query} from 'react-apollo'
import gql from "graphql-tag";

class TVRoot extends React.Component {
  render() {
    const query = gql`
          query TVPrograms {
            tv_programs {
              id
              name
            }
          }
        `;
    return (
      <Query query={query} fetchPolicy="network-only">

        {({ data, loading, error }) => {
          if (loading) return(<div>Loading</div>);
          if (error) return(<p>ERROR</p>);

          return (
            <ul>
              {
                data.tv_programs.map((tvProgram) => <li key={tvProgram.id}>{tvProgram.name}</li>)
              }
            </ul>
          );
        }}
      </Query>
    );
  }
}

export default TVRoot;
