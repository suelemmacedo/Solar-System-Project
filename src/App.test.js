import { render, screen } from '@testing-library/react';
import App from './App';

test('deve renderizar o Solar Explorer', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Solar Explorer' })).toBeInTheDocument();

  expect(screen.getByRole('heading', { name: 'Planetas' })).toBeInTheDocument();

  expect(screen.getByRole('heading', { name: 'Missões' })).toBeInTheDocument();
});
