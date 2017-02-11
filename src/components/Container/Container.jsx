import React, { PropTypes } from 'react';

import './container.scss';

const Container = ({ children }) => (
  <div className="container">
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
