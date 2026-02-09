import { render, screen , fireEvent} from '@testing-library/react';
import CartItem from '../CartItem';
const mockRemoveFromCart = vi.fn();
describe('CartItem', () => {
  test('renders without crashing', () => {
    render(
      <CartItem
                key={1}
                name={"Monitor"}
                price={179.99}
                onRemoveCart = {mockRemoveFromCart}
      />
    );
  });
  test('displays item information correctly', () => {
    render(
      <CartItem
                key={1}
                name={"Monitor"}
                price={179.99}
                onRemoveCart = {mockRemoveFromCart}
      />
    );
    expect(screen.getByText('Monitor')).toBeInTheDocument();
    expect(screen.getByText(179.99)).toBeInTheDocument();
  });
  test('calls remove function', () => {
    render(
      <CartItem
                key={1}
                name={"Monitor"}
                price={179.99}
                onRemoveCart = {mockRemoveFromCart}
      />
    );
    const removeButton = screen.getByTestId('remove-btn');
    
    fireEvent.click(removeButton);
    
    expect(mockRemoveFromCart).toHaveBeenCalledTimes(1);
  });
});