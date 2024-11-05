import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Login from './login-signup/login';
import Signup from './login-signup/signup';
import Location from './pages/Location';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/product/:id' element={<SingleProduct/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/careers' element={<Careers/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/location' element={<Location/>} />
        <Route path='/privacypolicy' element={<PrivacyPolicy/>} />
        <Route path='/termsconditions' element={<TermsConditions/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;