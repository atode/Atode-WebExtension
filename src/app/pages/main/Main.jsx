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
query CellsQuery($userId: ID!) {
  getUser(id: $userId) {
    cells {
      edges {
        node {
          id,
          title,
          url,
          owner {
            id
          }
        }
      }
    }
  }
}
`,
{
  options: () => {
    return {
      variables: {
        userId: localStorage.getItem('userId'),
      }
    }
  },
}
);

export class MainSkeleton extends Component {

  constructor(props) {
    super(props)

    this.logout = this.logout.bind(this)
  }

  logout() {
    localStorage.removeItem('authToken')
    localStorage.removeItem('username')
    localStorage.removeItem('userId')
  }

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
        <Button onClick={this.logout}>
          <Icon name="exit_to_app" />
        </Button>
      </div>
    );
  }
}

const Main = linksQuery(MainSkeleton);

export { Main };
