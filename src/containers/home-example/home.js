import React from 'react';
import { Helmet } from 'react-helmet';

// components
import { StyledLink } from './style';

const Home = () => (
  <div>
    <Helmet title='Carbon - Hello Parcel!' />
    <h1>Hello Parcel!</h1>
    <StyledLink to='/abcd'>Broken link</StyledLink>
  </div>
);

export default Home;
