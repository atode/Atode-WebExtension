import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';

import {
  List
} from '../../../external_modules/material-design';

import { CellItem } from './cell-item/CellItem'
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
          ? <div className="App">
              <List>
                {data.viewer.user.cells.edges.map(
                  ({ node }) => <CellItem {...node} />
                )}
              </List>
          </div>
          : <div>LOADING....</div>
        }
        <Toolbar handleLougout={this.props.handleLougout} />
      </div>
    );
  }
}

const Main = linksQuery(MainSkeleton);

export { Main };
