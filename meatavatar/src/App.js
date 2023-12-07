import Userhome from './components/userHome'
import Product from './components/Product'
import Coupon from './components/Coupon'
import Login from './components/login'
import Register from './components/register'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Profile from './components/Profile';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Userhome />} />
          <Route path="/menu" element={<Product />} />
          <Route path="/coupon" element={<Coupon />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
