import React, { PropTypes } from 'react';
import { Container, Header, Footer } from "components";

const App = ({ children }) => (
  <div className="app">
    <Container>
      <Header /> 
        {children}
      <Footer />
    </Container>
  </div>
);

App.propTypes = {
  children: PropTypes.any.isRequired,
};

export default App;
