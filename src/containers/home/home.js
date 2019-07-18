import React from 'react';
import { Helmet } from 'react-helmet';

// components
import { StyledLink } from './style';

const Home = () => (
  <div>
    <Helmet title='Carbon - Hello World!' />
    <h1>Hello World!</h1>
    <StyledLink to='/abcd'>Broken link</StyledLink>
  </div>
);

export default Home;
