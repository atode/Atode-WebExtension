import React from 'react'

const Label = ({ children, hint, ...props }) => (
  <label className="mdc-textfield" {...props}>
    {children}
    { hint && <span className="mdc-textfield__label">{hint}</span>}
  </label>
);

export {
  Label
}
