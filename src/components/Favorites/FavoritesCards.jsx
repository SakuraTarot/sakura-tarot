// import React from 'react'
// import './FavoritesCards.css';
// import { useState } from 'react';


// export default function FavoritesCards() {
//   const [savedData, setSavedData] = useState([]);
  
    
//   for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     if (key.startsWith('Saved_')) {
//       const data = localStorage.getItem(key);
//       savedData.push(JSON.parse(data));
//     }
//   }
//   const handleDelete = (index) => {
//     const keyToDelete = `Saved_${index}`;
//     localStorage.removeItem(keyToDelete);
//     savedData.splice(index, 1);
//     setSavedData([...savedData]);
//   };
  
//       const divArray = [];
//     for (let i = 0; i < localStorage.length; i++) {
//         divArray.push(
//           <div key={i} className='savedBox'>
//           <div className='date'>{savedData[i].date}</div>
//           <div className='line'><strong>Pasado:</strong> {savedData[i].selectedCards[0].meaning}</div>
//           <div className='line'><strong>Presente:</strong> {savedData[i].selectedCards[1].meaning}</div>
//             <div><strong>Futuro:</strong> {savedData[i].selectedCards[2].meaning}</div>
//             <div>{savedData[i].textareaValue}</div>
//             <button onClick={() => handleDelete(i)}>Eliminar</button>
//       </div>
//     );
//     }
//   return (
//     <div>
//         {divArray.reverse()}
//     </div>
//   )
// }
import React, { useState, useEffect } from 'react';
import './FavoritesCards.css';

export default function FavoritesCards() {
  const [savedData, setSavedData] = useState([]);

  useEffect(() => {
    const data = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('Saved_')) {
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
      <div className='date'>{item.date}</div>
      {item.isEditing ? (
        <input
          type="text"
          value={item.textareaValue}
          onChange={(e) => handleCommentChange(e, index)}
        />
      ) : (
        <div>{item.textareaValue}</div>
      )}
      <div className='line'>
        <strong>Pasado:</strong> {item.selectedCards[0].meaning}
      </div>
      <div className='line'>
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

  return <div>{divArray.reverse()}</div>;
}
