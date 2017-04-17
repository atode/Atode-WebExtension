import React from 'react';

import '@material/card/dist/mdc.card.css';

const Card = ({ children }) => (
  <div className="mdc-card demo-card">
    { children }
  </div>
);

export {
  Card
};
