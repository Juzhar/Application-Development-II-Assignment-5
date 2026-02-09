// Header.jsx
import './Header.css';
import { Link } from 'react-router-dom';
function Header({cartCount}) {
  return (
    <header id="app-header">
        <h2>Tech outlet</h2>
        <nav className="nav-menu">
            <Link to="/" className="nav-link">Home</Link> 
            <Link to="/products" className="nav-link">Products</Link> 
            <Link to="/cart" className="nav-link">Cart</Link> 
        </nav>
        <div className="cart-container"> 
            { cartCount > 0 && (
                <div>
                <span className="cartcount-badge">{cartCount}</span>
                </div>
            ) }
            <span className="cart-icon">🛒</span> 
            
        </div>
    </header>
  );
}

export default Header;