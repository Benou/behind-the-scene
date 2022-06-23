import { render, screen } from '@testing-library/react';

import App from './App';

test('should render paragraph correctly', () => {
  render(<App />);

  const pElement = screen.getByText(/Hello World!/i);
  expect(pElement).toBeInTheDocument();
});
