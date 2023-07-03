import React from "react";
import { Link } from "react-router-dom";
import "./Astral.css";
import Cart from "../../assets/cartas-favotires.svg";
import Back from "../../assets/back.svg";
import { useState, useEffect } from "react";
import { createContext, useContext } from 'react';




// Crear el contexto
const DataContext = createContext();

function AstralReadings() {
  const [datos, setDatos] = useState(null);
  const [datosParseados, setDatosParseados] = useState(null);
  const [datosGuardados, setDatosGuardados] = useState(null);

  useEffect(() => {
    const datosLocalStorage = localStorage.getItem('selectedCards');
    if (datosLocalStorage) {
      const datosParseados = JSON.parse(datosLocalStorage);
      setDatos(datosParseados);
      setDatosParseados(datosParseados);
    }
  }, []);

  return (
    <div className="main-reading">
      <img src={Cart} className="cart-bw" alt="Carta que aparece en la parte inferior del navbar" />

      <div className="store-readings">
        <div className="predictions">
          <DataContext.Provider value={datosGuardados}>
            {datosGuardados && datosGuardados.meaning ? (
              <p>{datosGuardados.meaning}</p>
            ) : (
              <p>No data.</p>
            )}
          </DataContext.Provider>
        </div>
      </div>

      <Link to="/Main" className="comeback">
        <img src={Back} className="back" alt="link para volver atras" />
        Back
      </Link>
    </div>
  );
}




export default AstralReadings


 // const [datos, setDatos] = useState(null);
  // const [datosParseados, setDatosParseados] = useState(null); // Variable para almacenar los datos parseados

  // useEffect(() => {
  //   const datosLocalStorage = localStorage.getItem('selectedCards');
  //   if (datosLocalStorage) {
  //     const datosParseados = JSON.parse(datosLocalStorage);
  //     setDatos(datosParseados);
  //     setDatosParseados(datosParseados); // Asignar los datos parseados a la variable de estado
  //   }
  // }, []);






  // const [datos, setDatos] = useState(null);

  // useEffect(() => {
  //   const datosLocalStorage = localStorage.getItem('selectedCards');
  //   if (datosLocalStorage) {
  //     const datosParseados = JSON.parse(datosLocalStorage);
  //     setDatos(datosParseados);
  //   }
  // }, []);

  
  // const saveData = () => {
  //   localStorage.setItem('misDatosGuardados', JSON.stringify(datos));
  //   alert('Datos guardados exitosamente.');
  // };





  // const [datos, setDatos] = useState(null);
  // const [datosParseados, setDatosParseados] = useState(null);

  // useEffect(() => {
  //   const datosLocalStorage = localStorage.getItem('selectedCards');
  //   if (datosLocalStorage) {
  //     const datosParseados = JSON.parse(datosLocalStorage);
  //     setDatos(datosParseados);
  //     setDatosParseados(datosParseados);
  //   }
  // }, []);



  // return (
  //   <div className="main-reading">
  //     <img
  //       src={Cart}
  //       className="cart-bw"
  //       alt="Carta que aparece en la parte inferior del navbar"
  //     />

  //     <div className="store-readings">
  //       <div className="predictions">
  //         {datosParseados.meaning ? (
  //         <p>{datosParseados.meaning}</p>) :(
  //           <p>No data.</p>
          
  //       )}
  //       </div>
  //     </div>

  //     <Link to="/Main" className="comeback">
  //       <img src={Back} className="back" alt="link para volver atras" />
  //       Back
  //     </Link>
  //   </div>
  // );

  //         }

// function AstralReadings() {
//   const [datos, setDatos] = useState(null);
//   const [datosParseados, setDatosParseados] = useState(null);
//   const [datosGuardados, setDatosGuardados] = useState(null);

//   useEffect(() => {
//     const datosLocalStorage = localStorage.getItem('selectedCards');
//     if (datosLocalStorage) {
//       const datosParseados = JSON.parse(datosLocalStorage);
//       setDatos(datosParseados);
//       setDatosParseados(datosParseados);
//     }
//   }, []);


//   return (
//     <div className="main-reading">
//       <img src={Cart} className="cart-bw" alt="Carta que aparece en la parte inferior del navbar" />

//       <div className="store-readings">
//         <div className="predictions">
//           {datosGuardados && datosGuardados.meaning ? (
//             <p>{datosGuardados.meaning}</p>
//           ) : (
//             <p>No data.</p>
//           )}
//         </div>
//       </div>

//       <Link to="/Main" className="comeback">
//         <img src={Back} className="back" alt="link para volver atras" />
//         Back
//       </Link>
//     </div>
//   );
