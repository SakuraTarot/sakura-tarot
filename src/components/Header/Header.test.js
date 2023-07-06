import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  test('renders Header component', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    expect(screen.getByAltText('Boton que regresa a las cartas')).toBeInTheDocument();
    expect(screen.getByAltText('Logo')).toBeInTheDocument();
    expect(screen.getByAltText('star for favorites')).toBeInTheDocument();
  });

  test('renders Back button when location.pathname is /Favorites', () => {
    render(
      <Router initialEntries={['/Favorites']}>
        <Header />
      </Router>
    );
    expect(screen.getByAltText('Boton que regresa a las cartas')).toBeInTheDocument();
  });

  test('does not render Back button when location.pathname is not /Favorites', () => {
    render(
      <Router initialEntries={['/Main']}>
        <Header />
      </Router>
    );
    
    expect(screen.queryByAltText('Boton que regresa a las cartas')).toBeNull();
  });
});