import React from 'react';
import { Helmet } from 'react-helmet';

// svgs
import NotFoundSVG from 'assets/404.svg';

const NotFound = () => (
  <div>
    <Helmet title='Carbon - 404 Not Found!' />
    <h1>This is not the route you&apos;re looking for.</h1>
    <p>This is not the route I&apos;m looking for...</p>
    <NotFoundSVG />
  </div>
);

export default NotFound;
