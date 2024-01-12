import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Recipe from "./pages/Recipe";
import AddRecipe from "./pages/AddRecipe";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";





function App() {
  //check state if a token exists in useSelector((state) => state.userID.userID.token); and set isAuthenticated to true
  const isAuthenticated = useSelector((state) => state.userID.userID?.token !== null && state.userID.userID?.token !== undefined);

  return (
    <Router>


      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe/:id" element={<Recipe />} />


        <Route path="/profile" element={isAuthenticated ? <Profile /> : <Login />} />
        {/* <Route path="/profile/*" element={<Profile />} /> */}

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/addRecipe" element={<AddRecipe />} />
      </Routes>

      <Footer />
    </Router>

  );
}


export default App;
