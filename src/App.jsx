import{BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './features/products/ProductList';
import CartPage from './features/cart/CartPage';
import './App.css';

function App() {
  return (
   <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
   </Router>
  
  );
}

export default App;
