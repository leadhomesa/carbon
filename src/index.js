import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PUBLIC_URL, NODE_ENV } from 'config';

import App from 'containers/app';

const supportsHistory = 'pushState' in window.history;
const rootElement = document.getElementById('root');
const renderApp = TheApp => {
  const CarbonApp = (
    <BrowserRouter basename={PUBLIC_URL} forceRefresh={!supportsHistory}>
      <TheApp />
    </BrowserRouter>
  );

  // hydrate the client if dom is already rendered with react-snap
  // only hydrates if you run the build script and host the static files somewhere
  return (
    (rootElement.hasChildNodes() && hydrate(CarbonApp, rootElement)) ||
    render(CarbonApp, rootElement)
  );
};

if (module.hot)
  module.hot.accept(() => {
    const NewApp = require('./containers/app').default;
    renderApp(NewApp);
  });

renderApp(App);

// service worker bit
if (NODE_ENV === 'production' && 'serviceWorker' in navigator)
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register(`sw.js`)
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
