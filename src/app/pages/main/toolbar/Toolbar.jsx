import React from 'react'

import {
  Button,
  Icon
} from '../../../../external_modules/material-design';

const Toolbar = ({ handleLogout }) => (
  <div>
    {/*<Icon name="settings" />*/}
    <Button onClick={handleLogout}>
      <Icon name="exit_to_app" />
    </Button>
  </div>
)

export {
  Toolbar
}
