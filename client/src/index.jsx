import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';

import App from './App';

import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './context/auth.context';
import { Routes } from './routes';
import api from './services/api';
import Site from './screens/site';

async function init() {
  const { pathname } = window.location;
  const isApplicationRoute = Object.values(Routes).includes(pathname);

  if (!isApplicationRoute) {
    const { site } = await api.user.site(pathname.slice(1));
    if (site) {
      return renderUserSite(site);
    }
  }
  renderApplication();
}

function renderUserSite(site) {
  ReactDOM.render(
    <React.StrictMode>
      <Site site={site} />
    </React.StrictMode>,
    document.getElementById('root'),
  );
}

function renderApplication() {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Router>
    </React.StrictMode>,
    document.getElementById('root'),
  );
}

init();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
