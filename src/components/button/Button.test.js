import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';
import { MemoryRouter } from "react-router-dom";

describe('Button', () => {
  it('renders without errors', () => {
    render(
    <MemoryRouter>
    <Button />
  </MemoryRouter>);
    const buttonElement = screen.getByText('Saber mi destino');
    expect(buttonElement).toBeInTheDocument();
  });
});

