import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router, useLocation } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Header from './Header';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));

describe('Header', () => {
  test('does not render Back button when location.pathname is not /Favorites', () => {
    const history = createMemoryHistory();
    history.push('/Main');

    useLocation.mockReturnValue({ pathname: '/Main' });

    render(
      <Router history={history}>
        <Header />
      </Router>
    );

    // Resto de las aserciones
  });

  test('renders Back button when location.pathname is /Favorites', () => {
    useLocation.mockReturnValue({ pathname: '/Favorites' });

    render(
      <Router>
        <Header />
      </Router>
    );

    // Resto de las aserciones
  });

  test('does not render Back button when location.pathname is not /Favorites', () => {
    useLocation.mockReturnValue({ pathname: '/Main' });

    render(
      <Router>
        <Header />
      </Router>
    );

    // Resto de las aserciones
  });
});
