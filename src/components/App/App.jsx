import React, { PropTypes } from 'react';
import { Container } from "components";

const App = ({ children }) => (
  <div className="app">
    <Container>
      {children}
    </Container>
  </div>
);

App.propTypes = {
  children: PropTypes.any.isRequired,
};

export default App;
