import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';

import { CellList } from './cell-list/CellList'
import { Toolbar } from './toolbar/Toolbar'

const linksQuery = graphql(
  gql`
query CellsQuery {
  viewer {
    user {
      cells {
        edges {
          node {
            id,
            title,
            url
          }
        }
      }
    }
  }
}
`
);

export class MainSkeleton extends Component {

  render() {
    const { data } = this.props;

    return (
      <div>
        {
          data.viewer && data.viewer.user
          ? <CellList data={data.viewer.user.cells.edges} />
          : <div>LOADING....</div>
        }
        <Toolbar handleLougout={this.props.handleLogout} />
      </div>
    );
  }
}

const Main = linksQuery(MainSkeleton);

export { Main };
