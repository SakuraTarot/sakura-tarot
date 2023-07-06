import React, { useState, useEffect } from 'react';
import './FavoritesCards.css';
import { Link } from "react-router-dom";
import Cart from "../../assets/cartas-favotires.svg";
import Back from "../../assets/back.svg";

export default function FavoritesCards() {
  const [savedData, setSavedData] = useState([]);

  useEffect(() => {
    const data = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("Saved_")) {
        const item = JSON.parse(localStorage.getItem(key));
        data.push(item);
      }
    }
    setSavedData(data);
  }, []);

  const handleDelete = (index) => {
    const keyToDelete = `Saved_${index}`;
    localStorage.removeItem(keyToDelete);
    setSavedData((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
  };

  const handleEdit = (index) => {
    setSavedData((prevData) => {
      const newData = [...prevData];
      newData[index].isEditing = true;
      return newData;
    });
  };

  const handleSave = (index) => {
    setSavedData((prevData) => {
      const newData = [...prevData];
      newData[index].isEditing = false;
      localStorage.setItem(`Saved_${index}`, JSON.stringify(newData[index]));
      return newData;
    });
  };

  const handleCommentChange = (e, index) => {
    const value = e.target.value;
    setSavedData((prevData) => {
      const newData = [...prevData];
      newData[index].textareaValue = value;
      return newData;
    });
  };

  const divArray = savedData.map((item, index) => (
    <div key={index} className="savedBox">
      <div className="date">{item.date}</div>
      {item.isEditing ? (
        <input
          type="text"
          value={item.textareaValue}
          onChange={(e) => handleCommentChange(e, index)}
        />
      ) : (
        <div>{item.textareaValue}</div>
      )}
      <div className="line">
        <strong>Pasado:</strong> {item.selectedCards[0].meaning}
      </div>
      <div className="line">
        <strong>Presente:</strong> {item.selectedCards[1].meaning}
      </div>
      <div>
        <strong>Futuro:</strong> {item.selectedCards[2].meaning}
      </div>
      {item.isEditing ? (
        <button onClick={() => handleSave(index)}>Guardar</button>
      ) : (
        <button onClick={() => handleEdit(index)}>Editar</button>
      )}
      <button onClick={() => handleDelete(index)}>Eliminar</button>
    </div>
  ));

  return (
    <div className="main-reading">
      <img
        src={Cart}
        className="cart-bw"
        alt="Carta que aparece en la parte inferior del navbar"/>

      <div>{divArray.reverse()}</div>

      <Link to="/Main" className="comeback">
        <img src={Back} className="back" alt="link para volver atras" />
        Back
      </Link>
    </div>
  );
}
