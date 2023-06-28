
import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

function Button() {
  return (
    <Link to="/Main" className="botonDestino">
      Saber mi destino
    </Link>
  );
}
export default Button;
