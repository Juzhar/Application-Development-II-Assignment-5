import { render, screen } from '@testing-library/react';
import Homepage from '../Homepage';

vi.mock('../../components/Hero', () => {
  return {
    default: ({ title, subtitle, calltoaction }) => (
    <section data-testid="hero">
        <div data-testid="hero-overlay">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <button>{calltoaction}</button>
        </div>
    </section>
    )
  };
});
describe('Homepage', () => {
  test('Renders without crashing', () => {
    render(
      <Homepage />
    );

  });
  test('Displays main content', () => {
    render(
      <Homepage />
    );
    expect(screen.getByText('Welcome to Tech outlet!')).toBeInTheDocument();
    expect(screen.getByText('We have all the best new tech products for a price that you will love!')).toBeInTheDocument();
    expect(screen.getByTestId('hero')).toBeInTheDocument();
    expect(screen.getByTestId('hero-overlay')).toBeInTheDocument();

  });
});