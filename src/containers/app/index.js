import React, { Fragment, lazy, Suspense } from 'react';
import { styled } from 'linaria/react';
import { css } from 'linaria';
import { Switch, Route } from 'react-router-dom';
import { breakpoints } from 'styles/index';

// helpers
import retry from 'helpers/lazy-retry';

// components
import Nav from 'components/nav';
import NotFound from 'containers/not-found';
import Health from 'containers/health';

// containers
const Home = lazy(() => retry(() => import('containers/home')));

// eslint-disable-next-line no-unused-vars
const GlobalStyle = css`
  :global() {
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      padding: 0;
      font-family: 'Source Sans Pro', sans-serif;
      /* Native apps doesn't allow text selection, so mobile PWAs shouldn't. */
      user-select: none;
      -webkit-tap-highlight-color: transparent;
    }
  }
`;

const Container = styled.div`
  max-width: ${breakpoints.large}px;
  padding: 0 1rem;
  margin: 0 auto;

  @media (min-width: ${breakpoints.large}px) {
    padding: 0;
  }
`;

const App = () => (
  <Fragment>
    <Nav />
    <Container>
      <Suspense fallback={<p>loading</p>}>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/health' component={Health} exact />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Container>
  </Fragment>
);

export default App;
