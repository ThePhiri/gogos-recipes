import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/index.scss"
import { RecipeProvider } from './context/RecipesContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecipeProvider>
      <App />
    </RecipeProvider>

  </React.StrictMode>
);



