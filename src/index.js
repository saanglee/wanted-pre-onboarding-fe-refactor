import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './store/auth/provider';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/globalStyles';
import './styles/layout.scss';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <GlobalStyles />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
);
