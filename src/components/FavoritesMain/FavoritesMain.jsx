

export const FavoritesMain = ({ selectedCards }) => {
    return (
        <div>
          <h2>Favoritos</h2>
          {selectedCards.map((card) => (
            <div key={card.id}>
              <img src={card.clowCard} alt={card.spanishName} />
              <span>{card.spanishName}</span>
              <span>{card.meaning}</span>
            </div>
          ))}
        </div>
      );
    };
