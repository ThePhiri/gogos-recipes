import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import CreateRecipe from './pages/CreateRecipe';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="gogos-recipes/" element={<Home />} />
          <Route path="gogos-recipes/recipe/:id" element={<Recipe />} />
          <Route path="gogos-recipes/login" element={<Login />} />
          <Route path="gogos-recipes/signup" element={<SignUp />} />
          <Route path="gogos-recipes/profile/:id" element={<Profile />} />
          <Route path="gogos-recipes/addRecipe/:id" element={<CreateRecipe />} />
        </Routes>

      </BrowserRouter>

    </div>

  )
}

export default App