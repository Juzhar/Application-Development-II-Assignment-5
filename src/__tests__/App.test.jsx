import { render, waitFor } from '@testing-library/react';
import App from '../App';
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
global.localStorage = localStorageMock;
describe('App', () => {
  test('renders without crashing', () => {
    localStorageMock.getItem.mockReturnValue('[]');
    render(
      <App/>
    );
  
  });
  test('loads cart from localStorage', () => {
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
    const cart = JSON.stringify([
        { key: 6, 
      name: "Keyboard", 
      price: 39.99 }
    ]);
    localStorageMock.getItem.mockReturnValue(cart);
    
    render(<App />);
    expect(localStorageMock.getItem).toHaveBeenCalledWith('cart');
    });
  test('save cart to localStorage', async() => {
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
    localStorageMock.getItem.mockReturnValue('[]');
    render(<App />);
    await waitFor(() => {
      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'cart',
        JSON.stringify([])
      );
    });

    });
  test('persistence of localStorage', async() => {
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
    localStorageMock.getItem.mockReturnValue('[]');
    const { unmount } = render(<App />);
    const cart = JSON.stringify([
        { key: 6, 
      name: "Keyboard", 
      price: 39.99 }
    ]);
    render(<App />);
    await waitFor(() => {
      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'cart',
        JSON.stringify([])
      );
    });
    unmount();
  
    localStorageMock.getItem.mockReturnValue(cart);
    
    render(<App />);
    
    expect(localStorageMock.getItem).toHaveBeenCalledWith('cart');
    });
});