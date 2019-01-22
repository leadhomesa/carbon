import React from 'react';
import { render } from 'react-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';

import App from 'containers/app';
import { register, unregister } from './sw';

const supportsHistory = 'pushState' in window.history;
const renderApp = TheApp =>
  render(
    <BrowserRouter forceRefresh={!supportsHistory}>
      <TheApp />
    </BrowserRouter>,
    document.getElementById('root')
  );

if (module.hot)
  module.hot.accept(() => {
    const NewApp = require('./containers/App').default;
    renderApp(NewApp);
  });

renderApp(App);

if (process.env.NODE_ENV === 'production') register();
else unregister();
