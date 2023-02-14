import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/App.css"
import { AppProvider } from './context/AppContext';
import { AuthContextProvider } from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </AuthContextProvider>


  </React.StrictMode>
);



