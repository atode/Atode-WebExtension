import React from 'react'

const LayoutGrid = ({ children, ...props }) => (
  <div className="mdc-layout-grid" {...props}>
    {children}
  </div>
);

export {
  LayoutGrid
}
