import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders button text correctly', () => {
    render(<Button />);
    const buttonText = screen.getByText('Saber mi destino');
    expect(buttonText).toBeInTheDocument();
  });

  it('has the correct link destination', () => {
    render(<Button />);
    const linkElement = screen.getByText('Saber mi destino').closest('a');
    expect(linkElement).toHaveAttribute('href', '/Main');
  });
});
