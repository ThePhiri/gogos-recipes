import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Recipe from "./pages/Recipe";




function App() {
  return (
    <Router>


      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>

      <Footer />
    </Router>

  );
}

export default App;
