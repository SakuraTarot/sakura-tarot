import React from "react";
import { Link } from "react-router-dom";
import "./Astral.css";
import Cart from "../../assets/cartas-favotires.svg";
import Back from "../../assets/back.svg";

function AstralReadings() {
  return (
    <div className="main-reading">
      <img
        src={Cart}
        className="cart-bw"
        alt="Carta que aparece en la parte inferior del navbar"
      />

      <div className="store-readings">
        <div className="predictions">pp</div>
      </div>

      <Link to="/Main" className="comeback">
        <img src={Back} className="back" alt="link para volver atras" />
        Back
      </Link>
    </div>
  );
}

export default AstralReadings;
