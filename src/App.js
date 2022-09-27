import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';



function App() {
  return (
    <div>
            <BrowserRouter>
      <Routes>
           <Route path="/" element={<Home/>} />
            <Route path="recipe/:id" element={<Recipe />} />
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<SignUp/>}/>
             <Route path="profile" element={<Profile/>}/>
      </Routes>

      </BrowserRouter>
 
    </div>

  )
}

export default App