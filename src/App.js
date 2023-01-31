import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Recipes from "./pages/Recipes";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/recipes"  element={<Recipes />} />
          <Route path="/login"  element={<Login />} />
        </Routes> 
      </div>
      <Footer />
    </Router>

  );
}

export default App;
