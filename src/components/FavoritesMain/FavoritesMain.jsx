import { useEffect, useState } from 'react';

const FavoritesMain = () => {
  const [favoriteCards, setFavoriteCards] = useState([]);

  useEffect(() => {
    const favoritesFromLocalStorage = localStorage.getItem('favoriteCards');
    const parsedFavorites = favoritesFromLocalStorage ? JSON.parse(favoritesFromLocalStorage) : [];
    // Aquí puedes realizar la mutación adicional de los datos según tus necesidades
    setFavoriteCards(parsedFavorites);
  }, []);

  return (
    <div>
      {/* Renderiza los datos mutados en la página "favoritesmain" */}
      {favoriteCards.map((card) => (
        <div key={card.id} className='favoriteCard'>
          <img src={card.clowCard} alt={card.name} className="openedCard" />
          <span>{card.spanishName}</span>
          <span>{card.meaning}</span>
        </div>
      ))}
    </div>
  );
};

export default FavoritesMain;
