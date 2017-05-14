import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';

import { CreateCellForm } from './CreateCellForm'

const createCellMutation = graphql(
  gql`
mutation createCell($input: CreateCellInput!) {
  createCell(input: $input) {
    changedCell {
      url
      id
      type
      createdAt
      modifiedAt
      title
    }
    clientMutationId
  }
}
`
);

export class CreateCellSkeleton extends Component {

  constructor(props) {
    super(props)

    this.handleAddCell = this.handleAddCell.bind(this)
  }

  handleAddCell( data ) {

    this.props.mutate({
      variables: {
        input: {
          url: data.url,
          ownerId: this.props.userId
        }
      }
    })

  }

  render() {
    return (
      <CreateCellForm handleAddCell={this.handleAddCell}/>
    );
  }
}

const CreateCell = createCellMutation(CreateCellSkeleton);

export { CreateCell };
