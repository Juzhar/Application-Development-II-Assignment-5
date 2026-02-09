
import ProductCard from '../components/ProductCard';
function Productspage({products, addToCart}) {
  return (
    <div>
        <h2>Our Products</h2>
        <main id="main-content">
        {products.map(product => ( 
          <ProductCard 
            id={product.id}  
            name={product.name} 
            price={product.price}
            image = {product.image}
            description = {product.description}
            onAddCart = {addToCart}
          /> 
        ))}
        
      </main>
    </div>
  );
}

export default Productspage;