import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import { breakpoints, pxtorem } from 'styles/index-example';

// containers
import Home from 'containers/home-example';
import NotFound from 'containers/not-found-example';

// components
import Nav from 'components/nav-example';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

const Container = styled.div`
  max-width: ${pxtorem(breakpoints.large)};
  margin: 0 auto;

  @media (max-width: ${pxtorem(breakpoints.large)}) {
    padding: 0 1rem;
  }
`;

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Nav />
    <Container>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route component={NotFound} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;
