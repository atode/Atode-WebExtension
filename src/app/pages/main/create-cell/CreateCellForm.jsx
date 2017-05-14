import React, { Component } from 'react';

import {
  Button,
  LayoutGrid,
  Cell,
  Icon,
  Input,
  Label
} from '../../../../external_modules/material-design'

class CreateCellForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      url: ''
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {

    event.preventDefault()

    this.props.handleAddCell( this.state )

  }

  handleInput( event ) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <LayoutGrid>
          <Cell>
            <Label hint="url">
              <Input
                value={this.state.url}
                onChange={this.handleInput}
                onBlur={this.handleInput}
                type="text"
                name="url"
              />
            </Label>
          </Cell>
          <Cell>
            <Button type="submit"><Icon name="snooze" /></Button>
          </Cell>
        </LayoutGrid>
      </form>
    );
  }
}

export { CreateCellForm };
