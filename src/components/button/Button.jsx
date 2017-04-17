import React from 'react';

import '@material/button/dist/mdc.button.css';

const Button = ({ children }) => (
  <button className="mdc-button mdc-button--compact mdc-card__action">
    { children }
  </button>
);

export {
  Button
};
