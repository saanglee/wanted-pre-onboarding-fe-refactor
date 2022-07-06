import React from 'react';
import { UserProvider } from './store/auth/provider';
import Routes from './routes';

function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

export default App;
