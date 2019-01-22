import React from 'react';

// components
import { StyledLink } from './styled';

const Home = () => (
  <div>
    <h1>Hello Parcel!</h1>
    <StyledLink to='/abcd'>Broken link</StyledLink>
  </div>
);

export default Home;
