import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';

import {
  Icon,
  List,
  ListItem,
  ListItemText,
  ListItemTextSecondary
} from '../../../external_modules/material-design';

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
    const { data: query } = this.props;

    return (
      <div>
        {query.getUser === undefined
          ? <div>LOADING....</div>
          : <div className="App">
              <List>
                {query.getUser.cells.edges.map(
                  ({ node: { id, title, url } }) => (
                    <ListItem key={id}>
                      <a href={url}>
                        <ListItemText>
                          {title}
                          <ListItemTextSecondary>{url}</ListItemTextSecondary>
                        </ListItemText>
                      </a>
                    </ListItem>
                  )
                )}
              </List>
            </div>}
        <Icon name="settings" />
        <Icon name="exit_to_app" />
      </div>
    );
  }
}

const Main = linksQuery(MainSkeleton);

export { Main };
