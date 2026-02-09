import './CartItem.css';
function CartItem({id, name, price, onRemoveCart}) {
  return (
    <div className="cart-item">
        <h4>{name}</h4>
        <h4>{price}</h4>
        <button data-testid="remove-btn" className = "delete-button" onClick= {() => onRemoveCart(id)}>Remove item</button>
    </div>
  );
}
export default CartItem;