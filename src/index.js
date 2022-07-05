import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './store/auth/provider';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/globalStyles';
import './styles/layout.scss';

import App from './App';
import Login from './pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <GlobalStyles />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          {/* 홈 */}
          <Route path="/" element={<App />} />
          {/* 로그인 */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
);
