// ProductCard.jsx
import './ProductCard.css';

function ProductCard({ id, name, price, description, image, onAddCart}) {
  return (
    <div className="post-card">
      <div className="post-header">
        <img 
          src={image}
          alt="Product Image" 
          className="prod-image"
        />
        <div className="product-info">
          <h3 className="prod-name">{name}</h3>
          <h3 className="prod-price">{price}</h3>
          <p className="prod-desc">{description} </p>
        </div>
        <button data-testid="add-btn" className="add-btn" onClick= {() => onAddCart(id, name, price)}> 
            Add to Cart 
        </button>
      </div>
    </div>
  );
}


export default ProductCard;