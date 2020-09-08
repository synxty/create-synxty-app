import { render, screen } from '@testing-library/react';
import Home from '.';

test('renders the lead title', () => {
  render(<Home />);
  const element = screen.getByText(/let's get to work/i);
  expect(element).toBeInTheDocument();
});
