import React from 'react';

import '@material/card/dist/mdc.card.css';

const CardSection = ({ type, children }) => (
  <div className={`mdc-card__${type}`}>
    { children }
  </div>
);

export {
  CardSection
};

