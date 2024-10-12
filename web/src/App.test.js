import { render, screen } from '@testing-library/react';
import WebApp from './App';

test('renders learn react link', () => {
  render(<WebApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
