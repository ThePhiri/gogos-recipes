import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/App.css"

import { AuthContextProvider } from './context/AuthContext';

import { Provider } from 'react-redux';
import store from './redux_store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthContextProvider>


  </React.StrictMode>
);



