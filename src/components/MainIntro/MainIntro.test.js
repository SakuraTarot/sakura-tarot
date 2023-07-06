import React from 'react';
import { render, screen } from '@testing-library/react';
// import { fireEvent } from '@testing-library/dom'; 
import { MemoryRouter } from 'react-router-dom';
import MainIntro from './MainIntro';

describe('MainIntro', () => {
  it('renders without errors', () => {
    render(
      <MemoryRouter>
        <MainIntro />
      </MemoryRouter>
    );

   
    const titleElement = screen.getByText('Clow Tarot');
    expect(titleElement).toBeInTheDocument();

   
    const descriptionElement = screen.getByText(/Bienvenidos a nuestro reino astral/i);
    expect(descriptionElement).toBeInTheDocument();

    // const buttonElement = screen.getByText('Saber mi destino');
    // fireEvent.click(buttonElement);

    // expect(window.location.pathname).toBe('/Main');
  });
});

