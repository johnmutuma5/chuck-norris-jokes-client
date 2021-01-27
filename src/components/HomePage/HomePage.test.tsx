import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import HomePage from '.';

describe('App', () => {
  it('renders the categories button', () => {
    render(<HomePage />, { wrapper: MemoryRouter });
    const linkElement = screen.getByText(/Browse Categories/i);
    expect(linkElement).toBeInTheDocument();
  });
});

