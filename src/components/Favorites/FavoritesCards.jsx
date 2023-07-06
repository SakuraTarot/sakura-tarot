import React, { useState, useEffect } from 'react';
import './FavoritesCards.css';
import { Link } from "react-router-dom";
import Cart from "../../assets/cartas-favotires.svg";
import Back from "../../assets/back.svg";
import DeleteModal from './PopUpDelete';

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
    <div key={index} className='savedBox'>
      <div className='date'>{item.date}<DeleteModal onDelete={() => handleDelete(index)} />
</div>
      <div className="line">
        <strong>Pasado:</strong> {item.selectedCards[0].meaning}
      </div>
      <div className="line">
        <strong>Presente:</strong> {item.selectedCards[1].meaning}
      </div>
      <div className='line'>
        <strong>Futuro:</strong> {item.selectedCards[2].meaning}
      </div>
      <div>
        <strong>Comentario:</strong>
        {item.isEditing ? (
          <textarea
          className='textArea'
          type="text"
          value={item.textareaValue}
          onChange={(e) => handleCommentChange(e, index)}
        ></textarea>
      ) : (
        <div>{item.textareaValue}</div>
      )}
      {item.isEditing ? (
        <button onClick={() => handleSave(index)} className='buttonEdit'>Guardar</button>
      ) : (
        <button onClick={() => handleEdit(index)} className='buttonEdit'>Editar</button>
      )}
        </div>
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
