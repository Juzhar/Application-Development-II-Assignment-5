// App.jsx
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Homepage from './pages/Homepage';
import Cartpage from './pages/Cartpage';
import Productspage from './pages/Productspage';


function App() {
  
  const [cart, setCart] = useState(() => {
    const savedcart = localStorage.getItem('cart');
    return savedcart !== null ? JSON.parse(savedcart) : [];
  });
  const products = [

    { 
      id: 1, 
      name: "Monitor", 
      price: 179.99, 
      image: "https://placehold.co/400x300",
      description: "View your screen in high quality"
    },
    { 
      id: 2, 
      name: "Hard Drive", 
      price: 79.99, 
      image: "https://placehold.co/400x300",
      description: "Store your files here in this drive"
    },
    { 
      id: 3, 
      name: "Microphone", 
      price: 64.99, 
      image: "https://placehold.co/400x300",
      description: "High quality microphone for streaming or video"
    },
    { 
      id: 4, 
      name: "Controller", 
      price: 49.99, 
      image: "https://placehold.co/400x300",
      description: "Video Game controller for all your gaming needs"
    },
    { 
      id: 5, 
      name: "Webcam", 
      price: 129.99, 
      image: "https://placehold.co/400x300",
      description: "4K webcam with auto-focus and noise reduction"
    },
    { 
      id: 6, 
      name: "Keyboard", 
      price: 39.99, 
      image: "https://placehold.co/400x300",
      description: "High quality keyboard for office use"
    }
  ];
  const addToCart = (productId, productName, productPrice) => {
    const newItem = {id: productId, name: productName, price: productPrice};
    setCart(prev => [...prev, newItem])
  }
  const removeFromCart = (cartId) => {
    setCart(cart.filter(cartitem => cartitem.id !== cartId)); 
  }
  useEffect(() => { 
    localStorage.setItem("cart", JSON.stringify(cart)); }, 
  [cart]);

  const totalPrice = cart.reduce((total, num) => total + num.price, 0);
  return (
    <BrowserRouter> 
    <div className="app">
      <Header cartCount = {cart.length}/>
      <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Productspage products={products} addToCart = {addToCart}/>} />
          <Route path="/cart" element={<Cartpage cart={cart} removeFromCart = {removeFromCart} totalPrice = {totalPrice}/>} />
      </Routes>
      <Footer 
        storename = "Tech Outlet" 
        contact = "Phone: 1-800-132-2931"
      />
      
    </div>
    
    </BrowserRouter> 
  );
}
export default App;