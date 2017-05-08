import React from 'react';

import '@material/button/dist/mdc.button.css';

const Button = ({ children, ...props }) => (
  <button className="mdc-button mdc-button--compact mdc-card__action" {...props} >
    { children }
  </button>
);

export {
  Button
};
