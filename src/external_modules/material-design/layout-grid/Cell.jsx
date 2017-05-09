import React from 'react'

const Cell = ({ children, ...props }) => (
  <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12" {...props}>
    {children}
  </div>
);

export {
  Cell
}
