import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';

import { CreateCell } from './create-cell/CreateCell'
import { CellList } from './cell-list/CellList'
import { Toolbar } from './toolbar/Toolbar'

const linksQuery = graphql(
  gql`
query CellsQuery {
  viewer {
    user {
      id,
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

  constructor(props) {
    super(props)

    this.handleCellCreate = this.handleCellCreate.bind(this)
  }

  handleCellCreate() {
    this.setState({
      test: 1
    })
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        {
          data.viewer && data.viewer.user
          ? <div>
              <CreateCell
                userId={data.viewer.user.id}
                handleCellCreate={this.handleCellCreate}
              />
              <CellList data={data.viewer.user.cells.edges} />
            </div>
          : <div>LOADING....</div>
        }
        <Toolbar handleLougout={this.props.handleLogout} />
      </div>
    );
  }
}

const Main = linksQuery(MainSkeleton);

export { Main };
