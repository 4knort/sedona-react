import React, { PropTypes } from 'react';
import { Container, Header, Content } from "components";

const App = ({ children }) => (
  <div className="app">
    <Container>
      <Header /> 
      <Content>
        {children}
      </Content>
    </Container>
  </div>
);

App.propTypes = {
  children: PropTypes.any.isRequired,
};

export default App;
