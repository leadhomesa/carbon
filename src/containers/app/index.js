import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import { breakpoints, pxtorem } from 'styles';

// containers
import Home from 'containers/home';
import NotFound from 'containers/not-found';

// components
import Nav from 'components/nav';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,600,700,700i');
  
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
