import React from 'react'

import {
  ListItem,
  ListItemText,
  ListItemTextSecondary
} from '../../../../external_modules/material-design';

const CellItem = ({ id, title, url }) => (
  <ListItem>
    <a href={url}>
      <ListItemText>
        {title}
        <ListItemTextSecondary>{url}</ListItemTextSecondary>
      </ListItemText>
    </a>
  </ListItem>
)

export {
  CellItem
}
