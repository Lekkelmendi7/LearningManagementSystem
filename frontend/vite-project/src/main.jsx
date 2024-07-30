import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { UserContextProvider } from './context/UserContext.jsx';

export const server = 'http://localhost:5000';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
    <App />
    </UserContextProvider>
  </React.StrictMode>,
)
