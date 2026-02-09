import CartItem from '../components/CartItem';
function Cartpage({cart, removeFromCart, totalPrice}) {
  return (
    <div>
        <h3>Shopping Cart</h3>
        {cart.length > 0 ? (
            cart.map(cartitem => (
                <CartItem
                id={cartitem.id}
                name={cartitem.name}
                price={cartitem.price}
                onRemoveCart = {removeFromCart}
                />
            ))
            ) : (
            <div className="empty-cart">
                <h3>Your cart is empty</h3>
                <p>No cart items to display. Start adding items to it!</p>
            </div>
            )}
        
        <h4>Total: ${totalPrice}</h4>
    </div>
  );
}

export default Cartpage;