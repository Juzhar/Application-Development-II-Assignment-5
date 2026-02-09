import { render, screen, fireEvent} from '@testing-library/react';
import ProductCard from '../ProductCard';
const mockAddToCart = vi.fn();
describe('ProductCard', () => {
  test('renders without crashing', () => {
    render(
      <ProductCard
            id={1}  
            name={"Monitor"} 
            price={179.99}
            image = {"https://placehold.co/400x300"}
            description = {"View your screen in high quality"}
            onAddCart = {mockAddToCart}
      />
    );
  
  });
  test('displays product info', () => {
    render(
      <ProductCard
            id={1}  
            name={"Monitor"} 
            price={179.99}
            image = {"https://placehold.co/400x300"}
            description = {"View your screen in high quality"}
            onAddCart = {mockAddToCart}
      />
    );
    expect(screen.getByText('Monitor')).toBeInTheDocument();
    expect(screen.getByText('View your screen in high quality')).toBeInTheDocument();
    expect(screen.getByText(179.99)).toBeInTheDocument();
  });
  test('contains add button', () => {
    render(
      <ProductCard
            id={1}  
            name={"Monitor"} 
            price={179.99}
            image = {"https://placehold.co/400x300"}
            description = {"View your screen in high quality"}
            onAddCart = {mockAddToCart}
      />
      
    );
    expect(screen.getByTestId('add-btn')).toBeInTheDocument();
  });
  test('add to cart works', () => {
    render(
      <ProductCard
            id={1}  
            name={"Monitor"} 
            price={179.99}
            image = {"https://placehold.co/400x300"}
            description = {"View your screen in high quality"}
            onAddCart = {mockAddToCart}
      />
      
    );
    const addButton = screen.getByTestId('add-btn');

    fireEvent.click(addButton);

    expect(mockAddToCart).toHaveBeenCalledTimes(1);
  });
  

});