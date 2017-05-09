import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';

import {
  Button,
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
    const { data } = this.props;

    return (
      <div>
        {data.viewer === undefined
          ? <div>LOADING....</div>
          : <div className="App">
              <List>
                {data.viewer.user.cells.edges.map(
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
          </div>
        }
        <Icon name="settings" />
        <Button onClick={this.props.handleLogout}>
          <Icon name="exit_to_app" />
        </Button>
      </div>
    );
  }
}

const Main = linksQuery(MainSkeleton);

export { Main };
