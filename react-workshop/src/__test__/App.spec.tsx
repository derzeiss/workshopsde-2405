import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('app', () => {
  it('should display the text "bookmonkey"', () => {
    render(<App />, { wrapper: MemoryRouter });
    expect(screen.getByText(/bookmonkey/i)).toBeInTheDocument();
  });
});
