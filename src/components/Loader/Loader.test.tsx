import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Loader from '.';

describe('Loader', () => {
  it('renders the text in body', () => {
    render(<Loader>Loader text</Loader>, { wrapper: MemoryRouter });
    const linkElement = screen.getByText(/Loader text/i);
    expect(linkElement).toBeInTheDocument();
  });
});

