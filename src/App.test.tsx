import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {MemoryRouter} from 'react-router-dom';

describe('App', () => {
  it('renders the logo text', () => {
    render(<App />, { wrapper: MemoryRouter });
    const linkElement = screen.getByText(/Laugh Industry/i);
    expect(linkElement).toBeInTheDocument();
  });
});

