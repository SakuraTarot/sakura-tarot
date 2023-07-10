import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import Header from './Header';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));

describe('Header', () => {
  test('does not render Back button when location.pathname is not /Favorites', () => {
    useLocation.mockReturnValue({ pathname: '/Main' });

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Resto de las aserciones
  });

  test('renders Back button when location.pathname is /Favorites', () => {
    useLocation.mockReturnValue({ pathname: '/Favorites' });

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Resto de las aserciones
  });

  test('does not render Back button when location.pathname is not /Favorites', () => {
    useLocation.mockReturnValue({ pathname: '/Main' });

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Resto de las aserciones
  });
});
