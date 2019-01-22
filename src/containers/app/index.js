import React, { Fragment } from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import { breakpoints, pxtorem } from 'styles';

// containers
import Home from 'containers/home';
import NotFound from 'containers/not-found';

// components
import Nav from 'components/Nav';

const globalStyles = css`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

const Container = styled('div')`
  max-width: ${pxtorem(breakpoints.large)};
  margin: 0 auto;

  @media (max-width: ${pxtorem(breakpoints.large)}) {
    padding: 0 1rem;
  }
`;

const App = () => (
  <Fragment>
    <Global styles={globalStyles} />
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
