import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Recipe from "./pages/Recipe";
import AddRecipe from "./pages/AddRecipe";
import { useSelector } from "react-redux";





function App() {
  //check state if a token exists in useSelector((state) => state.userID.userID.token); and set isAuthenticated to true
  const isAuthenticated = useSelector((state) => state.userID.userID?.token !== null && state.userID.userID?.token !== undefined);


  console.log("is auth", isAuthenticated)







  return (
    <Router>


      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe/:id" element={<Recipe />} />

        {/* the element doesnt show */}
        <Route path="/profile/*" element={<Profile />} />

        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/addRecipe" element={<AddRecipe />} />
      </Routes>

      <Footer />
    </Router>

  );
}


export default App;
