import React, { useState, useEffect } from 'react';
import { fetchFilteredCards } from './ApiGetArray';
import './Cards.css';

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const filteredCards = await fetchFilteredCards();
      setCards(filteredCards);
    };
      
    fetchData();
  }, []);

  const handleCardClick = (cardId) => {
    if (selectedCards.length < 3) {
      setSelectedCards((prevSelectedCards) => [...prevSelectedCards, cardId]);
    }
  };

  return (
    <div className="cards">
      {cards.map((card) => (
        <div key={card.id} onClick={() => handleCardClick(card.id)}>
              <img src={card.cardsReverse.clowReverse} alt={card.name} className="card" />
        </div>
      ))}
    </div>
  );
};

export default CardList;
