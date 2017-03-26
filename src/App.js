import React, { Component } from 'react';
import './App.css';
import { graphql, gql } from 'react-apollo';

const linksQuery = graphql(gql`
query LinksQuery {
  getUser(id: "VXNlcjox"){
    links {
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
`);

export class App extends Component {


  render() {

    const { data: query } = this.props;

    return (
      query.getUser === undefined ?
      <div>LOADING....</div> :
      <div className="App">
        <ul>
          {query.getUser.links.edges.map(({ node: { id, title, url } }) => (

              <li key={id}><a href={url}>{title}</a></li>

          ))}
        </ul>
      </div>
    );
  }
}

const AppWithData = linksQuery(App)

export default AppWithData;
